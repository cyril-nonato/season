import { connect } from 'react-redux'
import { getCollectionsStart } from '../../redux/shop/shop.actions';
import CollectionOverviewPage from './collection-overview-page.component';
import { compose } from 'redux';
import WithNotFound from '../../components/with-not-found/with-not-found.component';

const mapDispatchToProps = dispatch => ({
  getCollectionsStart: () => dispatch(getCollectionsStart())
})

const CollectionOverviewPageContainer = compose(
  connect(null, mapDispatchToProps), WithNotFound)(CollectionOverviewPage)

export default CollectionOverviewPageContainer;