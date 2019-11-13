import React from 'react'
import * as S from './not-found.styles'

const NotFound = () => {
  return ( 
    <S.Container>
      <S.ErrorNum>404</S.ErrorNum>
      <S.ErrorMess>Something went wrong, you either type something that cannot be found or we have done something wrong</S.ErrorMess>
    </S.Container>
   );
}
 
export default NotFound;