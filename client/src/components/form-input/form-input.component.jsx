import React from 'react'

import * as S from './form-input.styles';

const FormInput = ({name, type, label, onChange}) => {
  return ( 
    <S.Container>
      <S.Input data-testid='input' required name={name} onChange={onChange} type={type} placeholder={label} />
      <S.Label data-testid='label'>{label}</S.Label>
    </S.Container>
   );
}
 
export default FormInput;