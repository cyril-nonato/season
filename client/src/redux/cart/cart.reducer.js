import actionTypes from './cart.types';
import { addItemToCartUtils, removeItemFromCartUtils, removeItemCompletelyFromCartUtils } from './cart.utils';

const INITIAL_STATE = {
  cartItems: [],
  toggleCartDropdown: false
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItemToCartUtils(state.cartItems, action.payload)
      }
    case actionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCartUtils(state.cartItems, action.payload)
      }
    case actionTypes.REMOVE_ITEM_COMPLETELY_FROM_CART:
      return {
        ...state,
        cartItems: removeItemCompletelyFromCartUtils(state.cartItems, action.payload)
      }
    case actionTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        toggleCartDropdown: !state.toggleCartDropdown
      }
    case actionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      }
    default: return state
  }
}

export default cartReducer;