import {Action, applyMiddleware, createStore, Store} from 'redux';
import {reduxReducer} from './rootReducers';
import {epicsMiddleware, rootEpics} from './rootEpics';
import {AppState} from './appState';

export const reduxStore = (): Store<AppState> => {
  const middlewares = [epicsMiddleware];

  // if (process.env.NODE_ENV === `development`) {
  //   const { logger } = require(`redux-logger`);
  //   middlewares.push(logger);
  // }

  const store: Store = createStore<AppState, Action, object, object>(
    reduxReducer,
    applyMiddleware(...middlewares),
  );
  epicsMiddleware.run(rootEpics);

  return store;
};
