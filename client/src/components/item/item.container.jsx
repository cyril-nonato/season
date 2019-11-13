import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectItemIsLoaded, selectShopError, selectItem } from '../../redux/shop/shop.selector';
import { selectShowComments } from '../../redux/comments/comments.selector';
import { getCommentsStart } from '../../redux/comments/comments.actions';

import WithSpinner from '../with-spinner/with-spinner.component';
import Item from './item.component';
import { shopCleanUpError } from '../../redux/shop/shop.actions';
import { addItemToCart } from '../../redux/cart/cart.actions';

const mapStateToProps = createStructuredSelector({
  loading: (state) => !selectItemIsLoaded(state),
  error: selectShopError,
  item: selectItem,
  showComment: selectShowComments
});

const mapDispatchToProps = dispatch => ({
  shopCleanUpError: () => dispatch(shopCleanUpError()),
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  getCommentsStart: () => dispatch(getCommentsStart())
})

const ItemContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps), 
  WithSpinner)(Item)

export default ItemContainer;