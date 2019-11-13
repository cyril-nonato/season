import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import {createStructuredSelector} from 'reselect';
import { toggleSidedrawer } from '../../redux/navigation/navigation.actions';
import { selectToggleSidedrawer } from '../../redux/navigation/navigation.selectors';
import SideDrawer from './sideDrawer.component';

const mapStateToProps = createStructuredSelector({
  showSideDrawer: selectToggleSidedrawer
});

const mapDispatchToProps = dispatch => ({
  toggleSidedrawer: () => dispatch(toggleSidedrawer())
});

const SideDrawerContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter)(SideDrawer)

export default SideDrawerContainer;