import { createSelector } from 'reselect';
import { totalPrice, totalQuantity } from './cart.utils';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectTotalPrice = createSelector(
  [selectCartItems],
  cartItems => totalPrice(cartItems)
);

export const selectTotalQuantity = createSelector(
  [selectCartItems],
  cartItems => totalQuantity(cartItems)
);

export const selectToggleCartDropdown = createSelector(
  [selectCart],
  cart => cart.toggleCartDropdown
);