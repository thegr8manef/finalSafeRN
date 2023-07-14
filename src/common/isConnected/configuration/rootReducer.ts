import {combineReducers} from 'redux';
import {ConnectionState} from './state';
import {reducerLoadConnectionState} from '../useCase/listnerConnection/reducer';
import {reducerSetConnectionState} from '../useCase/setConnection/reducer';

export const reducerConnection = combineReducers<ConnectionState>({
  loadConnectionState: reducerLoadConnectionState,
  setConnectionState: reducerSetConnectionState,
});
