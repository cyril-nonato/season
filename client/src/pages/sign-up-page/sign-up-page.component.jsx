import React, { useEffect } from 'react'

import * as S from '../sign-in-sign-up-styles-shared/sign-in-sign-up.styles';

import SignUpContainer from '../../components/sign-up/sign-up.container';

const SignUpPage = ({ history, currentUser, clearUserError }) => {

  useEffect(() => {
    if (currentUser) {
      history.goBack();
    };

    return () => clearUserError();

  }, [currentUser, history, clearUserError])

  return (
    <S.Container>
      <SignUpContainer />
    </S.Container>
  );
}

export default SignUpPage;