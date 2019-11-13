import {connect} from 'react-redux'
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { clearUserError } from '../../redux/user/user.actions';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import SignUpPage from './sign-up-page.component';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  clearUserError: () => dispatch(clearUserError())
});

const SignUpPageContainer = compose(connect(mapStateToProps, mapDispatchToProps))(SignUpPage);

export default SignUpPageContainer;
