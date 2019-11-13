import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect'

import { selectCurrentUserLoading } from '../../redux/user/user.selectors';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import { selectUserError } from '../../redux/user/user.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import SignIn from './sign-in.component';

const mapStateToProps = createStructuredSelector({
  loading: selectCurrentUserLoading,
  error: selectUserError,
});

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart(email, password))
});

const SignInContainer = compose(connect(mapStateToProps, mapDispatchToProps), WithSpinner)(SignIn);

export default SignInContainer;