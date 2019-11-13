import React from 'react';
import * as S from './collection.styles';
import CollectionItemContainer from '../collection-item/collection-item.container';

const Collection = ({collection}) => {

  return (
    <S.Container>
      <S.H3 data-testid='brand'>{collection.brand}</S.H3>
      <S.List>
        {
          collection.items.map(item =>
            <CollectionItemContainer key={item.id} item={item} />
          )
        }
      </S.List>
    </S.Container>
  );


}

export default Collection;
