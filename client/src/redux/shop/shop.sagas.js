import { takeLatest, call, put, all } from 'redux-saga/effects';
import actionTypes from './shop.types';
import { firestore, convertQuerySnapshotToObj } from '../../firebase/firebase.utils';
import { getCollectionsSuccess, queryFailure, getCollectionByBrandNameSuccess, getItemSuccess } from './shop.actions';

import { addItemRouteToCollectionsItems, addItemRouteToCollectionItems, filterItem } from './shop.utils'

export function* getCollectionsAsync() {
  try {
    const collectionRef = yield firestore.collection('collections');
    const querySnapshot = yield collectionRef.get();
    const collectionsData = yield call(convertQuerySnapshotToObj, querySnapshot);
    const updatedCollectionsData = yield call(addItemRouteToCollectionsItems, collectionsData);
    yield put(getCollectionsSuccess(updatedCollectionsData));
  } catch (error) {
    yield put(queryFailure(error.message));
  }
}

export function* getCollectionsStart() {
  yield takeLatest(actionTypes.GET_COLLECTIONS_START, getCollectionsAsync)
}

export function* getCollectionByBrandNameStartAsync({ payload }) {
  try {
    const collectionRef = yield firestore.collection('collections');
    const docRef = yield collectionRef.doc(payload);
    const querySnapshot = yield docRef.get();
    if (!querySnapshot.exists) {
      yield put(queryFailure('Error not found'));
    }
    const collection = yield addItemRouteToCollectionItems(querySnapshot.data());
    yield put(getCollectionByBrandNameSuccess(collection));

  } catch (error) {
    yield put(queryFailure(error.message));
  }
}

function* getCollectionsByBrandNameStart() {
  yield takeLatest(actionTypes.GET_COLLECTION_BY_BRAND_NAME_START, getCollectionByBrandNameStartAsync)
}

export function* getItemStartAsync({ payload: { brandName, model } }) {
  try {
    const brandNameFilter = brandName.toLowerCase();
    const modelFilter = model.toLowerCase();
    const collectionRef = yield firestore.collection('collections');
    const docRef = yield collectionRef.doc(brandNameFilter)
    const querySnapshot = yield docRef.get();

    if (!querySnapshot.exists) {
      yield put(queryFailure('Error not found'));
    } else {
      const data = yield querySnapshot.data();
      const updatedItem = filterItem(data, modelFilter);
      if (updatedItem) {
        yield put(getItemSuccess(updatedItem));
      } else {
        yield put(queryFailure('Error not found'));
        throw new Error('error')
      }
    }
  } catch (error) {
    yield put(queryFailure(error.message));
  }
}

function* getItemStart() {
  yield takeLatest(actionTypes.GET_ITEM_START, getItemStartAsync)
}

function* shopSagas() {
  yield all([
    call(getCollectionsStart),
    call(getCollectionsByBrandNameStart),
    call(getItemStart),
  ])
};

export default shopSagas;