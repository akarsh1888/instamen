// middleware for logging all information before/after action function
// eslint-disable-next-line
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// persistStore function from reduxpersist library
import { persistStore } from 'redux-persist';

import thunk from 'redux-thunk';
//import ReduxPromise from 'redux-promise';

import { createStore, applyMiddleware, compose } from 'redux';







// in future we can expand the array & put any other middleware library/functionality
const middlewares = [thunk];

// redux browser extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));


//for persisting the store
export const persistor = persistStore(store);


