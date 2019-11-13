import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux';
import { compose } from 'redux';

import { selectNavLinks, selectToggleSidedrawer } from '../../redux/navigation/navigation.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import Navigation from './navigation.component';

const mapStateToProps = createStructuredSelector({
  navLinks: selectNavLinks,
  checkForSidedrawer: selectToggleSidedrawer,
  currentUser: selectCurrentUser
});

const NavigationContainer = compose(connect(mapStateToProps))(Navigation);

export default NavigationContainer;