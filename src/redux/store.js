import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import persistReducer from './root-reducer';

const middlewares = [];

// logging will be working on development builds only
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(
  persistReducer,
  applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);

export default { store, persistor };
