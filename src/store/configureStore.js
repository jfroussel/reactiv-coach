import { createStore, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";
const logger = createLogger();

import rootReducer from './../reducers';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(logger)
  );

  return store;
}