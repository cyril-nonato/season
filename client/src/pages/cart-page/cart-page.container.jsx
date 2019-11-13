import { connect } from 'react-redux';
import { selectCartItems, selectTotalPrice } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import CartPage from './cart-page.component';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectTotalPrice,
  currentUser: selectCurrentUser
})

const CartPageContainer = compose(connect(mapStateToProps))(CartPage);

export default CartPageContainer;

