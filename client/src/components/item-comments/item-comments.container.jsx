import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';

import WithSpinner from '../with-spinner/with-spinner.component';
import { selectCommentsLoading } from '../../redux/comments/comments.selector';
import ItemComments from './item-comments.component';

const mapStateToProps = createStructuredSelector({
  loading: selectCommentsLoading
});

const ItemCommentsContainer = compose(connect(mapStateToProps), WithSpinner)(ItemComments);

export default ItemCommentsContainer;