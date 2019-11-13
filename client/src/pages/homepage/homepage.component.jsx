import React from 'react';

import * as S from './homepage.styles';

import DirectoryContainer from '../../components/directory/directory.container';
import CustomButton from '../../components/custom-button/custom-button.component';

const HomePage = () => {

  return (
    <S.Container>
      <S.ImgContainer>
        <S.ImgBg />
        <S.TextContent>
          <S.Span>Season</S.Span>
          <S.H2>Phone Collections</S.H2>
          <CustomButton isLink to='/shop'>Shop Now</CustomButton>
        </S.TextContent>
      </S.ImgContainer>

      <DirectoryContainer />
    </S.Container>
  )
}

export default HomePage;