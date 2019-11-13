import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import { selectCollectionsIsLoaded, selectCollectionsAndItemsToMap } from '../../redux/shop/shop.selector';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionOverview from './collection-overview.component';

const mapStateToProps = createStructuredSelector({
  loading: (state) => !selectCollectionsIsLoaded(state),
  collections: selectCollectionsAndItemsToMap
});

const CollectionOverviewContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionOverview);

export default CollectionOverviewContainer;