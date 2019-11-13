import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { signOutStart } from '../../redux/user/user.actions';

const SignOut = ({history}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signOutStart())
    history.push('/');
  }, [dispatch, history])

  return null;
}

export default withRouter(SignOut);