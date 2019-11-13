import { connect } from 'react-redux';
import { compose } from 'redux';
import { clearCart } from '../../redux/cart/cart.actions';
import StripeCheckoutButton from './stripe-button.component';


const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart())
});

const StripeCheckoutButtonContainer = compose(connect(null, mapDispatchToProps))(StripeCheckoutButton);

export default StripeCheckoutButtonContainer;