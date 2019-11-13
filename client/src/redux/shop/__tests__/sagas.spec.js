import '@testing-library/jest-dom/extend-expect';
import { runSaga } from 'redux-saga';
import { cleanup } from '@testing-library/react';

import * as firebaseApi from '../../../firebase/firebase.utils';
import mockedFirestore, { mockPayload, mockPayloadError } from '../__mocks__/firestore';

import { getCollectionsAsync, getCollectionByBrandNameStartAsync, getItemStartAsync } from '../shop.sagas';
import { getCollectionsSuccess, queryFailure, getCollectionByBrandNameSuccess, getItemSuccess } from '../shop.actions';
import * as shopUtils from '../shop.utils';

// Stores any dispatched actions
let dispatchedActions = [];

// Mocks store
const fakeStore = {
  getState: () => ({ test: 'test', }),
  dispatch: action => dispatchedActions.push(action)
};

afterEach(cleanup)

describe('getCollectionsAsync Saga Test', () => {

  beforeEach(() => {
    // Resets dispatched actions
    dispatchedActions = [];
  })

  test('should run w/o errors', async () => {

    // Mock firestore api
    firebaseApi.firestore.collection = mockedFirestore.collection;
    firebaseApi.convertQuerySnapshotToObj = mockedFirestore.convertQuerySnapshotToObj;

    //Mock shop-utils helper functions
    shopUtils.addItemRouteToCollectionsItems = jest.fn(() => mockPayload);

    // Allows redux-saga to run outside redux
    await runSaga(fakeStore, getCollectionsAsync).toPromise();

    expect(firebaseApi.firestore.collection.mock.calls.length).toBe(1);
    expect(firebaseApi.convertQuerySnapshotToObj).toHaveBeenCalled();
    expect(shopUtils.addItemRouteToCollectionsItems).toHaveBeenCalled();
    expect(dispatchedActions).toContainEqual(getCollectionsSuccess(mockPayload))
  });

  test('throw an error if there is an error', async () => {

    //Mock firebase api w/ error
    firebaseApi.firestore.collection = mockedFirestore.collectionErr;

    // Allows redux-saga to run outside redux
    await runSaga(fakeStore, getCollectionsAsync).toPromise();

    expect(dispatchedActions).toContainEqual(queryFailure(mockPayloadError))
  })
});



describe('getCollectionByBrandNameStartAsync Saga Test', () => {

  beforeEach(() => {
    // Resets dispatched actions
    dispatchedActions = [];
  })

  test('should run w/o errors', async () => {
    // Mock firestore api
    firebaseApi.firestore.collection = mockedFirestore.collection;

    //Mock shop utils
    shopUtils.addItemRouteToCollectionItems = jest.fn(() => mockPayload)

    // Allows redux-saga to run outside redux
    await runSaga(fakeStore, getCollectionByBrandNameStartAsync, { test: 'test' }).toPromise();

    expect(shopUtils.addItemRouteToCollectionItems).toHaveBeenCalled();
    expect(dispatchedActions).toContainEqual(getCollectionByBrandNameSuccess(mockPayload))
  });

  test('throw an error if there is an error', async () => {

    // Mock firestore api
    firebaseApi.firestore.collection = mockedFirestore.collectionErr;

    // Allows redux-saga to run outside redux
    await runSaga(fakeStore, getCollectionByBrandNameStartAsync, { test: 'test' }).toPromise();

    expect(dispatchedActions).toContainEqual(queryFailure(mockPayloadError))
  })
});


describe('getItemStartAsync Saga Test', () => {

  beforeEach(() => {
    // Resets dispatched actions
    dispatchedActions = [];
  });

  test('should run w/o errors', async () => {
    
    //Mock firebase api
    firebaseApi.firestore.collection = mockedFirestore.collection;

    //Mock shop utils
    shopUtils.filterItem = jest.fn(() => mockPayload)

    await runSaga(fakeStore, getItemStartAsync, {payload: {brandName: 'test', model: 'test'}}).toPromise();
    
    expect(firebaseApi.firestore.collection).toHaveBeenCalled();
    expect(shopUtils.filterItem).toHaveBeenCalled();
    expect(dispatchedActions).toContainEqual(getItemSuccess(mockPayload))
  });

  test('throw an error if there is an error ', async () => {
    //Mock firebase api
    firebaseApi.firestore.collection = mockedFirestore.collectionErr;
    
    await runSaga(fakeStore, getItemStartAsync, {payload: {brandName: 'test', model: 'test'}}).toPromise();

    expect(dispatchedActions).toContainEqual(queryFailure(mockPayloadError));
  });


});