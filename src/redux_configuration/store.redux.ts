import {Action, applyMiddleware, createStore, Store} from 'redux';
import {reduxReducer} from './rootReducers';
import {epicsMiddleware, rootEpics} from './rootEpics';
import {AppState} from './appState';
import logger from 'redux-logger';


export const reduxStore = (): Store<AppState> => {
  const store: Store = createStore<AppState, Action, object, object>(
    reduxReducer,
    applyMiddleware(epicsMiddleware,logger),
  );
  epicsMiddleware.run(rootEpics);

  return store;
};
