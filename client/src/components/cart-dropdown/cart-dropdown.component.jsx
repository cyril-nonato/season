import React from 'react'

import * as S from './cart-dropdown.styles'
import CartDropdownContainerItem from '../cart-dropdown-item/cart-dropdown-item.container';
import Backdrop from '../backdrop/backdrop.component';
import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = ({
  items,
  toggleCartDropdown,
  selectToggleCartDropdown
}) => {

  let cartItems = null;
  if (items.length) {
    cartItems = (
      items.map((item, idx) => <CartDropdownContainerItem index={idx} key={item.id} item={item} />)
    )
  } else {
    cartItems = <S.Span>Empty cart</S.Span>
  }

  const handleClick = e => {
    if(e.target.tagName === 'A') {
      toggleCartDropdown();
    }
  }

  return (
    <React.Fragment>
      {
        selectToggleCartDropdown &&
        <Backdrop click={toggleCartDropdown} />
      }
      <S.Container onClick={handleClick} toggle={selectToggleCartDropdown}>
        <S.Triangle />
        <S.Content>
          <S.H4>Your Cart</S.H4>
          {cartItems}
        </S.Content>
        <CustomButton isLink to='/cart'>Go to cart page</CustomButton>
      </S.Container>
    </React.Fragment>

  );
}

export default CartDropdown;