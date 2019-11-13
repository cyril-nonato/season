import { connect } from 'react-redux';
import {compose} from 'redux';
import { addItemToCart, removeItemFromCart, removeItemCompletelyFromCart } from '../../redux/cart/cart.actions';
import cartItem from './cart-item.component';

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item)),
  removeItemFromCart: item => dispatch(removeItemFromCart(item)),
  removeItemCompletelyFromCart: item => dispatch(removeItemCompletelyFromCart(item)),
});

const CartItemContainer = compose(connect(null, mapDispatchToProps))(cartItem)

export default CartItemContainer