import actionTypes from './comments.types';

export const getCommentsStart = (brandName, model) => ({
  type: actionTypes.GET_COMMENTS_START,
  payload: {brandName, model}
});

export const getCommentsSuccess = (comments) => ({
  type: actionTypes.GET_COMMENTS_SUCCESS,
  payload: comments
});

export const getCommentsFailure = () => ({
  type: actionTypes.GET_COMMENTS_FAILURE
});

export const addCommentStart = (brandName, model, commentDetails) => ({
  type: actionTypes.ADD_COMMENT_START,
  payload: {brandName, model, commentDetails}
});

export const removeCommentsOnUnmount = () => ({
  type: actionTypes.REMOVE_COMMENTS_ON_UNMOUNT
});
