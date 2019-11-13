import actionTypes from "./user.types"

export const googleSignInStart = () => ({
  type: actionTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = (email, password) => ({
  type: actionTypes.EMAIL_SIGN_IN_START,
  payload: {email, password}
});

export const signInSuccess = (currentUser) => ({
  type: actionTypes.SIGN_IN_SUCCESS,
  payload: currentUser
});

export const signInFailure = (error) => ({
  type: actionTypes.SIGN_IN_FAILURE,
  payload: error
});

export const signOutStart = () => ({
  type: actionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: actionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: actionTypes.SIGN_OUT_FAILURE,
  payload: error
});

export const signUpStart = (user) => ({
  type: actionTypes.SIGN_UP_START,
  payload: user
});

export const signUpSuccess = (user) => ({
  type: actionTypes.SIGN_UP_SUCCESS,
  payload: user
});

export const signUpFailure = (error) => ({
  type: actionTypes.SIGN_UP_FAILURE,
  payload: error
});

export const clearUserError = () => ({
  type: actionTypes.CLEAR_USER_ERROR
});