import actionTypes from "./shop.types"

export const INITIAL_STATE = {
  collections: null,
  collection: null,
  loading: false,
  error: null,
  item: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_COLLECTIONS_START:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case actionTypes.GET_COLLECTIONS_SUCCESS:
      return {
        ...state,
        error: null,
        collections: action.payload,
        loading: false,
      }
    case actionTypes.GET_COLLECTION_BY_BRAND_NAME_START:
      return {
        ...state,
        loading: true,
        error: null
      }
    case actionTypes.GET_COLLECTION_BY_BRAND_NAME_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        collection: action.payload
      }
    case actionTypes.GET_ITEM_START:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case actionTypes.GET_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        item: action.payload
      }
    case actionTypes.QUERY_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    case actionTypes.SHOP_ERROR_CLEAN_UP:
      return {
        ...state,
        error: null
      }
    default:
      return state;
  }
}

export default shopReducer;