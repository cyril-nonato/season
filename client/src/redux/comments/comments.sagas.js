import { takeLatest, call, put, all } from 'redux-saga/effects'
import actionTypes from './comments.types'
import { firestore, firebase } from '../../firebase/firebase.utils';
import { getCommentsSuccess, getCommentsFailure } from './comments.actions';

function* getCommentsStartAsync({ payload: { brandName, model } }) {
  try {
    const brandDocs = yield firestore.collection(`${brandName}_comments`).doc(model);
    const modelRef = yield firestore.collection(`${model}Comments`);
    yield modelRef.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if(change === 'added') {
          console.log(change.doc.data());
        }
      });
    });
    const comments = yield brandDocs.get();
    yield put(getCommentsSuccess(comments.data()));
    // yield firestore.collection(`${brandName.toLowerCase()}_comments`).onSnapshot(snapshot => {
    //   snapshot.docChanges().forEach(change => {
    //     if(change === 'added') {
    //       getCommentsSuccess(change.doc.data())
    //     }
    //   })
    // })
  } catch (error) {
    yield put(getCommentsFailure(error.message))
  }
  yield console.log(brandName);
}

function* getCommentsStart() {
  yield takeLatest(actionTypes.GET_COMMENTS_START, getCommentsStartAsync)
}

function* addCommentsStartAsync({ payload: { brandName, model, commentDetails } }) {
  const {displayName, created_at, comment} = commentDetails
  // format object to be added
  const commentObject = {
    displayName,
    created_at: firebase.firestore.Timestamp.fromDate(created_at),
    comment,
    model: model
  }
  try {
    yield firestore.collection(`${brandName}Comments`).add(commentObject)
  } catch (error) {
    
  }
  
}

function* addCommentStart() {
  yield takeLatest(actionTypes.ADD_COMMENT_START, addCommentsStartAsync)
}

function* commentsSagas() {
  yield all([
    call(getCommentsStart),
    call(addCommentStart)
  ])
}

export default commentsSagas;