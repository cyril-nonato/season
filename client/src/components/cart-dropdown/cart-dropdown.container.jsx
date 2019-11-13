import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectToggleCartDropdown } from '../../redux/cart/cart.selector'
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import CartDropdown from './cart-dropdown.component';

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
  selectToggleCartDropdown: selectToggleCartDropdown
});

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

const CartDropdownContainer = compose(connect(mapStateToProps, mapDispatchToProps))(CartDropdown);

export default CartDropdownContainer;