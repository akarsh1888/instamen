import { combineReducers } from "redux";

// user reducer
import userReducer from "./user/user.reducer";

// Cart Reducer
import cartReducer from "./cart/cart.reducer";

// shop Reducer
import shopReducer from "./shop/shop.reducer";

// redux-persist reducer
import { persistReducer } from "redux-persist";

// redux-persist library for [local storage] ..ie different syntax for [session storage]
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
