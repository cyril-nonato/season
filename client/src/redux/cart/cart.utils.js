export const addItemToCartUtils = (cartItems, itemToAdd) => {
  const existingItem = cartItems.filter(cartItem => cartItem.id === itemToAdd.id);

  if (existingItem.length) {
    const updatedItems = cartItems
      .map(cartItem => 
        cartItem.id === itemToAdd.id ? 
        { ...cartItem, quantity: cartItem.quantity + 1 } 
        : cartItem);
    return updatedItems
  } else {
    const newCartItems = [...cartItems, { ...itemToAdd, quantity: 1 }];
    return newCartItems
  }
};

export const removeItemFromCartUtils = (cartItems, itemToRemove) => {
  
  const [existingItem] = cartItems.filter(cartItem => cartItem.id === itemToRemove.id);

  console.log(existingItem.quantity)
  if (existingItem.quantity > 1) {
    const updatedItems = cartItems
    .map(cartItem => 
      cartItem.id === itemToRemove.id ? 
      { ...cartItem, quantity: cartItem.quantity - 1 } 
      : cartItem);

      return updatedItems
  } else {
    return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
  }
}

export const removeItemCompletelyFromCartUtils = (cartItems, itemToRemove) => {
  return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
}

export const totalPrice = (cartItems) => {
  return cartItems.reduce((accu, curr) => {
    return accu + (curr.quantity * curr.price)
  }, 0);
}

export const totalQuantity = (cartItems) => {
  return cartItems.reduce((accu, curr) => {
    return accu + curr.quantity
  }, 0);
}