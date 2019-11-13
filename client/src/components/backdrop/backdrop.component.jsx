import React from 'react'
import * as S from './backdrop.styles';

const Backdrop = ({ click }) => {
  return (
    <S.BackdropContainer data-testid='backdrop' onClick={click} />
  );
}

export default Backdrop;