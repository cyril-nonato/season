import React from 'react'

import * as S from './directory.styles'

import CustomButton from '../custom-button/custom-button.component'

const DirectoryItem = ({item: {img, name, linkUrl}}) => {

  return ( 
    <S.LinkContainer data-testid="link" >
      <S.Image data-testid='image' bg={img} alt={name}>&nbsp;</S.Image>
      <CustomButton isLink to={linkUrl}>{name} shop</CustomButton>
    </S.LinkContainer>
   );
}
export default DirectoryItem;