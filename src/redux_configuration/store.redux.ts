import {AppState} from 'react-native/types';
import {Action, applyMiddleware, createStore, Store} from 'redux';
import {reduxReducer} from './rootReducers';
import {epicsMiddleware, rootEpics} from './rootEpics';

export const reduxStore = (): Store<AppState> => {
  const store: Store = createStore<AppState, Action, {}, {}>(
    reduxReducer,
    applyMiddleware(epicsMiddleware),
  );
  epicsMiddleware.run(rootEpics);

  return store;
};
