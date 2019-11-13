import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist';
import createFilter from 'redux-persist-transform-filter';

import userReducer from './user/user.reducer';
import navigationReducer from './navigation/navigation.reducer';
import shopReducer from './shop/shop.reducer';
import homeReducer from './home/home.reducer';
import cartReducer from './cart/cart.reducer';
import commentsReducer from './comments/comments.reducer';

const userSaveFilter = createFilter(
  'user',
  ['currentUser']
);

const shopSaveFilter = createFilter(
  'shop',
  ['collections', 'collection', 'item']
)

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'shop', 'cart', 'comments'],
  transforms: [userSaveFilter, shopSaveFilter]
}

const rootReducer =  combineReducers({
  user: userReducer,
  navigation: navigationReducer,
  shop: shopReducer,
  home: homeReducer,
  cart: cartReducer,
  comments: commentsReducer
});

export default persistReducer(persistConfig, rootReducer)