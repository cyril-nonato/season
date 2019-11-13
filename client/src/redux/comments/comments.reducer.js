import actionTypes from './comments.types'

const INITIAL_STATE = {
  userComments: null,
  loading: false,
  error: null,
  showComments: false
}

const commentsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actionTypes.GET_COMMENTS_START:
      return {
        ...state,
        loading: true,
        error: null,
        showComments: false,
      }
    case actionTypes.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        showComments: true,
        userComments: action.payload
      }
    case actionTypes.REMOVE_COMMENTS_ON_UNMOUNT:
      return {
        ...state,
        showComments: false,
        userComments: null
      }
    default:
      return state
  }
};

export default commentsReducer