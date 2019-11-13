import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component'

import * as S from './sign-up.styles';
import CustomButton from '../custom-button/custom-button.component';

const SignUp = ({error, signUpStart}) => {
  const [value, setValue] = useState({
    email: '',
    displayName: '',
    password: '',
    confirm_password: '',
  });

  const handleChange = e => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.password === value.confirm_password) {
      const { email, displayName, password } = value;
      const details = {
        email,
        displayName,
        password
      }
      signUpStart(details)
    } else {
      setPasswordError(`Passwords doesn't match`)
    }
  }

  return (
    <S.Container>
        <S.H3>Sign Up</S.H3>
        <S.Error>{error}</S.Error>
        <S.Error>{passwordError}</S.Error>
        <S.Form onSubmit={handleSubmit}>
          <FormInput
            onChange={handleChange}
            type='text'
            label='Full Name'
            name="displayName"
          />
          <FormInput
            onChange={handleChange}
            type='email'
            label='email'
            name="email"
          />
          <FormInput
            onChange={handleChange}
            type='password'
            label='password'
            name='password'
          />
          <FormInput
            onChange={handleChange}
            type='password'
            label='confirm password'
            name='confirm_password'
          />
          <CustomButton text='Sign up' type='submit'>Sign-up</CustomButton>
        </S.Form>
        <S.Span>
          Have an account?
          <S.SignInLink to="/sign-in"> Sign-in here</S.SignInLink>
        </S.Span>
        
    </S.Container>
  );
}

export default SignUp;