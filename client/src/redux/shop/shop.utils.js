export const convertCollectionItemsToMap = (collection) => {
  const itemsKeys = Object.keys(collection.items);
  
  const items = itemsKeys.map(key => collection.items[key]);

  return {...collection, items};
}

export const convertCollectionsAndItemsToMap = (collections) => {
  const collectionsMap = Object.keys(collections).map(key => collections[key])
  collectionsMap.forEach(collection => {
    return convertCollectionItemsToMap(collection)
  });
  return collectionsMap;
};

export const addItemRouteToCollectionsItems = (collections) => {
  const updatedCollections = {...collections}
  console.log(updatedCollections)
  const updatedCollectionsKeys = Object.keys(updatedCollections);
  updatedCollectionsKeys.forEach(colKey => {
    const items = updatedCollections[colKey].items;
    const itemsKeys = Object.keys(items);
    itemsKeys.forEach(key => {
      items[key]['itemRoute'] = key
    });
  });

  return updatedCollections;
}

export const addItemRouteToCollectionItems = (collection) => {
  const updatedCollection = {...collection};
  const itemsKeys = Object.keys(updatedCollection.items);
  itemsKeys.forEach(key => {
    updatedCollection.items[key]['itemRoute'] = key
  });
  return updatedCollection;
};

export const collectionItem = (collection, brandName, model) => {
  const brandNameFilter = brandName.toLowerCase();
  const modelFilter = model.toLowerCase();
  const items = collection[brandNameFilter].items;
  const item = items[modelFilter];
  return item;
};

export const filterItem = (data, modelFilter) => {
  const item = data.items[modelFilter];
  if(!!item) {
    const updatedItem = {...item, 'itemRoute': modelFilter};
    return updatedItem
  } else {
    return null;
  }
}