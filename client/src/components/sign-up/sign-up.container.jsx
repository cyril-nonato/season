import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUserLoading, selectUserError } from '../../redux/user/user.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import SignUp from './sign-up.component';
import { signUpStart } from '../../redux/user/user.actions';


const mapStateToProps = createStructuredSelector({
  loading: selectCurrentUserLoading,
  error: selectUserError
});

const mapDispatchToProps = dispatch => ({
  signUpStart: (details) => dispatch(signUpStart(details))
});

const SignUpContainer = compose(connect(mapStateToProps, mapDispatchToProps), WithSpinner)(SignUp);

export default SignUpContainer;