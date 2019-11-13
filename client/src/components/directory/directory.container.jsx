import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectSections } from '../../redux/home/home.selector';
import Directory from './directory.component';

const mapStateToProps = createStructuredSelector({
  sections: selectSections
});

const DirectoryContainer = compose(connect(mapStateToProps))(Directory);

export default DirectoryContainer;