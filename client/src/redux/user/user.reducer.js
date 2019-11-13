import actionTypes from "./user.types"

const INITIAL_STATE = {
  currentUser: null,
  loading: false,
  error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actionTypes.GOOGLE_SIGN_IN_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.EMAIL_SIGN_IN_START:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        loading: false,
      }
    case actionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      }
    case actionTypes.SIGN_UP_START:
      return {
        ...state,
        error: null,
        loading: true,
      }
    case actionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        error: null,
        currentUser: action.payload
      }
    case actionTypes.SIGN_IN_FAILURE:
    case actionTypes.SIGN_OUT_FAILURE:
    case actionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    case actionTypes.CLEAR_USER_ERROR:
      return {
        ...state,
        error: null
      }
    default:
      return state;
  }
}

export default userReducer