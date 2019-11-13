import React from 'react';

import * as S from './custom-button.styles';

const CustomButton = ({ google, click, type, children, isLink, to }) => {

  if(isLink) {
    return <S.LinkButton to={to}>
      {children}
    </S.LinkButton>
  }

  return ( 
    <S.Button google={google} data-testid='button' type={type} onClick={click}>
      {children}
    </S.Button>
  );
}

export default React.memo(CustomButton);