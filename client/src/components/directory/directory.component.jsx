import React from 'react'
import DirectoryItem from '../directory-item/directory-item.component';

import * as S from './directory.styles';

const Directory = ({sections}) => {
  return ( 
    <S.Container>
      {
        sections.map(section => <DirectoryItem key={section.id} item={section} />)
      }
    </S.Container>
   );
}
 
export default Directory;