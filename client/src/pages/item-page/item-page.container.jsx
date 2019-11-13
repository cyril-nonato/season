import {connect} from 'react-redux';
import { getItemStart } from '../../redux/shop/shop.actions';
import { selectItem, selectShopError } from '../../redux/shop/shop.selector';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import ItemPage from './item-page.component';
import WithNotFound from '../../components/with-not-found/with-not-found.component';

const mapStateToProps = createStructuredSelector({
  item: selectItem,
  error: selectShopError
});

const mapDispatchToProps = dispatch => ({
  getItemStart: (brandName, model) => dispatch(getItemStart(brandName, model))
});

const ItemPageContainer = compose(
  connect(mapStateToProps, mapDispatchToProps), WithNotFound)(ItemPage);

export default ItemPageContainer;