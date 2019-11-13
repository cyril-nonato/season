import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import * as S from './sign-in.styles';

const SignIn = ({error, googleSignInStart, emailSignInStart}) => {

  const [userCreds, setUserCreds] = useState({ email: '', password: '' })

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = userCreds;
    emailSignInStart(email, password)
  }

  const handleChange = e => {
    setUserCreds({
      ...userCreds,
      [e.target.name]: e.target.value
    })
  }

  return (
    <S.Container>
      <S.H3>Sign In</S.H3>

      <S.Error>{error}</S.Error>

      <S.Form onSubmit={handleSubmit}>
        <FormInput
          onChange={handleChange}
          type='email'
          name='email'
          label='email' />
        <FormInput
          onChange={handleChange}
          type='password'
          name='password'
          label='password' />
        <S.ButtonContainer>
          <CustomButton type='submit'>Sign-in</CustomButton>
          <CustomButton click={() => googleSignInStart()}
            type='button'
            google
          >Sign-in with Google</CustomButton>
        </S.ButtonContainer>
      </S.Form>
      <S.Span>
        Don't have an account?
        <S.SignUpLink to='/sign-up'> Sign-up here</S.SignUpLink>
      </S.Span>
      
    </S.Container>
  );
}

export default SignIn;