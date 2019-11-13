import React from 'react';
import CollectionPreviewContainer from '../collection-preview/collection-preview.container';
import * as S from './collection-overview.styles';

const CollectionOverview = ({collections}) => {

  return (
    <S.Container>
      {
        collections.map(collection =>
          <CollectionPreviewContainer key={collection.id} collection={collection} />
        )
      }
    </S.Container>
  )
}

export default CollectionOverview;

