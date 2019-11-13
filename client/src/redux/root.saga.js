import {all, call} from 'redux-saga/effects';
import userSagas from './user/user.sagas';
import shopSagas from './shop/shop.sagas';
import commentsSagas from './comments/comments.sagas';

function* rootSaga() {
  yield all([
    call(userSagas),
    call(shopSagas),
    call(commentsSagas)
  ])
}

export default rootSaga;