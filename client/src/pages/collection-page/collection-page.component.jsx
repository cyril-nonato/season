import React, { useEffect } from 'react';
import CollectionContainer from '../../components/collection/collection.container';

const checkCollectionBrand = (collection) => collection ? collection.id : null;

const CollectionPage = ({ match, collection, getCollectionByBrandNameStart }) => {
  const { params: { brandName } } = match;
  const id = checkCollectionBrand(collection);
  useEffect(() => {

    if (id !== brandName) {
      getCollectionByBrandNameStart(brandName)
    }
  }, [brandName, getCollectionByBrandNameStart, id]);

  return (
    <CollectionContainer />
  );
}

export default CollectionPage;
