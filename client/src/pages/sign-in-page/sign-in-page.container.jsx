import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { clearUserError } from '../../redux/user/user.actions';

import SignInPage from './sign-in-page.component';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  clearUserError: () => dispatch(clearUserError())
});

const SignInPageContainer = compose(connect(mapStateToProps, mapDispatchToProps))(SignInPage)

export default SignInPageContainer;