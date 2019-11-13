import { all, call, put, takeLatest } from 'redux-saga/effects';
import actionTypes from './user.types';
import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';
import { signInSuccess, signInFailure, signOutSuccess, signOutFailure, signUpFailure } from './user.actions';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield createUserProfileDocument(userAuth, additionalData);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const {user} = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(signInFailure(error.message))
  }
}

function* onEmailSignInStart() {
  yield takeLatest(actionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(actionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}


export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailure(error.message))
  }
}

export function* onSignOutStart() {
  yield takeLatest(actionTypes.SIGN_OUT_START, signOut)
}

export function* signUp({ payload }) {
  const { password, email, ...otherDetails } = payload;
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user, otherDetails)
  } catch (error) {
    yield put(signUpFailure(error.message))
  }
}

export function* onSignUpStart() {
  yield takeLatest(actionTypes.SIGN_UP_START, signUp)
}


function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onEmailSignInStart)
  ])
}

export default userSagas;