import actionTypes from './cart.types';

export const addItemToCart = (item) => ({
  type: actionTypes.ADD_ITEM_TO_CART,
  payload: item
});

export const removeItemFromCart = (item) => ({
  type: actionTypes.REMOVE_ITEM_FROM_CART,
  payload: item
});

export const removeItemCompletelyFromCart = (item) => ({
  type: actionTypes.REMOVE_ITEM_COMPLETELY_FROM_CART,
  payload: item
});

export const toggleCartDropdown = () => ({
  type: actionTypes.TOGGLE_CART_DROPDOWN
});

export const clearCart = () => ({
  type: actionTypes.CLEAR_CART
});