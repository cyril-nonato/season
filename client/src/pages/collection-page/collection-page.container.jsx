import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getCollectionByBrandNameStart } from '../../redux/shop/shop.actions';
import { selectCollection, selectShopError } from '../../redux/shop/shop.selector';
import CollectionPage from './collection-page.component';
import WithNotFound from '../../components/with-not-found/with-not-found.component';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
  collection: selectCollection,
  error: selectShopError
});

const mapDispatchToProps = dispatch => ({
  getCollectionByBrandNameStart: brandName => dispatch(getCollectionByBrandNameStart(brandName)) 
});

const CollectionPageContainer = compose(connect(mapStateToProps, mapDispatchToProps), WithNotFound)(CollectionPage);

export default CollectionPageContainer;