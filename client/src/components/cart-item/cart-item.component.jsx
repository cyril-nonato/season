import React from 'react'
import * as S from './cart-item.styles';

const CartItem = ({ item, index, addItemToCart, removeItemFromCart, removeItemCompletelyFromCart }) => {

  const { imageUrl, name, price, quantity } = item;

  return (
    <S.Item>
      <S.Index>{index}</S.Index>
      <S.Image src={imageUrl} alt={name} />
      <S.Name data-testid='name'>{name}</S.Name>
      <S.QuantityContainer>
        <S.QuantitySpan data-testid='removeItemFromCart' onClick={() => removeItemFromCart(item)}>&#10094;</S.QuantitySpan>
        <S.QuantityValue data-testid='quantity'>{quantity}</S.QuantityValue>
        <S.QuantitySpan data-testid='addItemToCart' onClick={() => (addItemToCart(item))}>&#10095;</S.QuantitySpan>
      </S.QuantityContainer>
      <S.Price>{price.toFixed(2)}</S.Price>
      <S.Remove onClick={() => removeItemCompletelyFromCart(item)}>&#10005;</S.Remove>
    </S.Item>
  );
}

export default CartItem;