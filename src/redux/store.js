import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// persistStore function from reduxpersist library
//import { persistStore } from 'redux-persist';



const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

//export const persistor = persistStore(store);

//export default { store, persistStore };
