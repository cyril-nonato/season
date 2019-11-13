import React from 'react'

import * as S from './cart-dropdown-item.styles'

const CartDropdownItem = ({
  item, 
  index,
  removeItemFromCart, 
  removeItemCompletelyFromCart,
  addItemToCart
}) => {
  const {imageUrl, quantity} = item;
  
  return ( 
    <S.Container>
      <S.Index>{index + 1}</S.Index>
      <S.Img src={imageUrl} />
      <S.QuantityContainer>
        <S.QuantitySpan data-testid='removeItemFromCart' onClick={() => removeItemFromCart(item)}>&#10094;</S.QuantitySpan>
        <S.QuantityValue data-testid='quantity'>{quantity}</S.QuantityValue>
        <S.QuantitySpan data-testid='addItemToCart' onClick={() => (addItemToCart(item))}>&#10095;</S.QuantitySpan>
      </S.QuantityContainer>
      <S.Remove onClick={() => removeItemCompletelyFromCart(item)}>&#10005;</S.Remove>
    </S.Container>
   );
}
 
export default CartDropdownItem;