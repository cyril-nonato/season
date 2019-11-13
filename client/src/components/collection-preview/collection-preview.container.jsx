import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectWindowInnerWidth } from '../../redux/navigation/navigation.selectors';
import CollectionPreview from './collection-preview.component';

const mapStateToProps = createStructuredSelector({
  windowWidth: selectWindowInnerWidth
})

const CollectionPreviewContainer = compose(
  connect(mapStateToProps), withRouter)(CollectionPreview)

export default CollectionPreviewContainer;