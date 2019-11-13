import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import CollectionItem from './collection-item.component';

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
});

const CollectionItemContainer = compose(
  connect(null, mapDispatchToProps), withRouter)(CollectionItem);

export default CollectionItemContainer;