import { connect } from 'react-redux';
import { selectWindowInnerWidth } from '../../redux/navigation/navigation.selectors';
import { toggleSidedrawer } from '../../redux/navigation/navigation.actions';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Toolbar from './toolbar.component';
import { selectToggleCartDropdown, selectTotalQuantity } from '../../redux/cart/cart.selector';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

const mapStateToProps = createStructuredSelector({
  windowWidth: selectWindowInnerWidth,
  selectToggleCartDropdown: selectToggleCartDropdown,
  selectTotalQuantity: selectTotalQuantity
});

const mapDispatchToProps = dispatch => ({
  toggleSidedrawer: () => dispatch(toggleSidedrawer()),
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

const ToolbarContainer = compose(connect(mapStateToProps, mapDispatchToProps))(Toolbar);

export default ToolbarContainer;