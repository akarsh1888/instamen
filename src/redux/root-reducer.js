import { combineReducers } from 'redux';

// user reducer
import userReducer from './user/user.reducer';

// Cart Reducer
import cartReducer from "./cart/cart.reducer";

// directoryMenu Reducer
import directoryMenuReducer from "./directory/directory.reducers";

// shop Reducer
import shopReducer from './shop/shop.reducer';


// // redux-persist
//import { persistReducer } from 'redux-persist';

// // redux-persist library for local storage
// import storage from 'redux-persist/lib/storage';


// const persistConfig = {
//   key: "root",
//   storage,
//     whitelist: ['cart']
// };



export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryMenuReducer,
  shop: shopReducer
});

// export default persistReducer(persistConfig, rootReducer);

