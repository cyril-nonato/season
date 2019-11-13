import actionTypes from "./shop.types";

export const getCollectionsStart = () => ({
  type: actionTypes.GET_COLLECTIONS_START
});

export const getCollectionsSuccess = (collections) => ({
  type: actionTypes.GET_COLLECTIONS_SUCCESS,
  payload:  collections 
});

export const getCollectionByBrandNameStart = (brandName) => ({
  type: actionTypes.GET_COLLECTION_BY_BRAND_NAME_START,
  payload: brandName
});

export const getCollectionByBrandNameSuccess = (collection) => ({
  type: actionTypes.GET_COLLECTION_BY_BRAND_NAME_SUCCESS,
  payload: collection
});

export const getItemStart = (brandName, model) => ({
  type: actionTypes.GET_ITEM_START,
  payload: { brandName, model }
});

export const getItemSuccess = (item) => ({
  type: actionTypes.GET_ITEM_SUCCESS,
  payload: item
});

export const queryFailure = error => ({
  type: actionTypes.QUERY_FAILURE,
  payload: error
});

export const shopCleanUpError = () => ({
  type: actionTypes.SHOP_ERROR_CLEAN_UP,
});

