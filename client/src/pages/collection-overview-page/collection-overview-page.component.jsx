import React, { useEffect } from 'react'
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';

const CollectionOverviewPage = ({getCollectionsStart}) => {

  useEffect(() => {
    getCollectionsStart();
  }, [getCollectionsStart]);

  return (
    <CollectionOverviewContainer />

  );
}

export default CollectionOverviewPage;