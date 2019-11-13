import { renderHook, act } from '@testing-library/react-hooks'
import SignIn from './sign-in.component'


test('Sign In Componet Test', () => {

  const error = false;
  const googleSignInStart = jest.fn();
  const emailSignInStart = jest.fn();
  const wrapper = renderHook(() => SignIn({error, googleSignInStart, emailSignInStart}));
});