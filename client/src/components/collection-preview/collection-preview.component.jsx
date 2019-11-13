import React, {useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItemContainer from '../collection-item/collection-item.container';

import * as S from './collection-preview.styles';

const CollectionPreview = ({collection, match: { path }, windowWidth}) => {
  
  const [numOfPhones, setNumOfPhones] = useState(2);
  useEffect(() => {
    if(windowWidth > 900) {
      setNumOfPhones(3)
    } else {
      setNumOfPhones(2)
    }
  }, [windowWidth])
  
  return (
    <S.Container>
      <S.H3>{collection.brand}</S.H3>
      <S.List>
        {
          Object.keys(collection.items)
            .filter((key, index) => index < numOfPhones)
            .map(key => <CollectionItemContainer brand={collection.brand} key={key} item={collection.items[key]} />)
        }
      </S.List>
      <S.ShowMoreLink to={`${path}/${collection.brand.toLowerCase()}`}>Show more...</S.ShowMoreLink>
    </S.Container>
  );
}

export default withRouter(CollectionPreview);