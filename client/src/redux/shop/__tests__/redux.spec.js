import actionTypes from "../shop.types";
import { getCollectionsSuccess, getItemStart, getCollectionsStart } from "../shop.actions";
import shopReducer from "../shop.reducer";

describe('Shop Redux Test', () => {
  
  it('Should create an action GET_COLLECTIONS_START', () => {
    const expectedAction = {
      type: actionTypes.GET_COLLECTIONS_START
    }
    expect(getCollectionsStart()).toEqual(expectedAction)
  })

  it('Should create an action GET_COLLECTIONS_SUCCESS', () => {
    const payload = {
      someData: 'Some Data'
    }
    const expectedAction = {
      type: actionTypes.GET_COLLECTIONS_SUCCESS,
      payload
    }

    expect(getCollectionsSuccess(payload)).toEqual(expectedAction)
  });

  it('Should create an action GET_ITEM_START', () => {
    const payload = {
      brandName: 'Some Brand',
      model: 'Some Model'
    }

    const expectedAction = {
      type: actionTypes.GET_ITEM_START,
      payload: {...payload}
    }

    expect(getItemStart(payload.brandName, payload.model)).toEqual(expectedAction)
  })

  it('Should return the initial state', () => {
    const state = {
      model: 'model'
    }
    expect(shopReducer(state, {})).toEqual(state)
  });

  it('Should return the specified state', () => {
    const action = {
      type: actionTypes.GET_ITEM_START
    }
    const state = {
      loading: true,
      error: null,
    }
    expect(shopReducer([], action)).toEqual(state)
  });

});

