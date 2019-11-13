import React, { useEffect } from 'react'
import SignInContainer from '../../components/sign-in/sign-in.container';

import * as S from '../sign-in-sign-up-styles-shared/sign-in-sign-up.styles';

const SignInPage = ({history, clearUserError, currentUser}) => {

  useEffect(() => {
    if(currentUser) {
      history.goBack();
    };

    return () => clearUserError();

  }, [currentUser, history, clearUserError])

  return (
    <S.Container>
      <SignInContainer />
    </S.Container>
  );
}

export default SignInPage;