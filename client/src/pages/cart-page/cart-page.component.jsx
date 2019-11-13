import React from 'react';

import CartItemContainer from '../../components/cart-item/cart-item.container';
import CustomButton from '../../components/custom-button/custom-button.component';

import * as S from './cart-page.styles';
import StripeCheckoutButtonContainer from '../../components/stripe-button/stripe-button.container';

const CartPage = ({ cartItems, totalPrice, currentUser }) => {

  return (
    <S.Container>
      <S.H3>Your cart items</S.H3>
      <S.Descriptions>
        <span>No.</span>
        <span>Phone Image</span>
        <span>Model</span>
        <span>Quantity</span>
        <span>Price</span>
      </S.Descriptions>
      <S.List>
        {
          !cartItems.length && <S.Span>Empty cart</S.Span>
        }
        {
          cartItems.map((item, index) => <CartItemContainer index={index + 1} key={item.id} item={item} />)
        }
      </S.List>
      <S.PriceContainer>
        <span>Total Price: <strong>$ {totalPrice.toFixed(2)}</strong></span>
      </S.PriceContainer>
      <S.ButtonContainer>
        {
          currentUser && <StripeCheckoutButtonContainer price={totalPrice} />
        }
        {
          !currentUser && <CustomButton isLink to='/sign-in'>Sign-in to checkout</CustomButton>
        }
      </S.ButtonContainer>
      <div className="test-warning">
        *Please use the following test credit card payments*
      <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
    </S.Container>
  );
}

export default CartPage;