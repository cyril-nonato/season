import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price, clearCart }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_XkRC9hQSqNEupmGLWamAgoJT0082KKDf2f';
  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      clearCart();
      alert('Payment successful');
    }).catch(error => {
      console.log('Payment Error', JSON.parse(error));
      alert(
        'There was an issue with your payment. Please make sure you use the provided credit card'
      )
    });
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='Season'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
     />
  )
}

export default StripeCheckoutButton;