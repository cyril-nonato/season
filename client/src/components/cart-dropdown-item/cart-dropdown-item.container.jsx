import { compose } from 'redux'
import { connect } from 'react-redux'
import { removeItemFromCart, removeItemCompletelyFromCart, addItemToCart } from '../../redux/cart/cart.actions';
import CartDropdownItem from './cart-dropdown-item.component';

const mapDispatchToProps = dispatch => ({
  removeItemFromCart: item => dispatch(removeItemFromCart(item)),
  removeItemCompletelyFromCart: item => dispatch(removeItemCompletelyFromCart(item)),
  addItemToCart: item => dispatch(addItemToCart(item))
});

const CartDropdownContainerItem = compose(connect(null, mapDispatchToProps))(CartDropdownItem);

export default CartDropdownContainerItem;