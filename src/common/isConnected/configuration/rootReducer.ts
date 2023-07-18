import {combineReducers} from 'redux';
import {ConnectionState} from './state';
import {reducerLoadConnectionState} from '../useCase/loadConnectionState/reducer';

export const reducerConnection = combineReducers<ConnectionState>({
  loadConnectionState: reducerLoadConnectionState,
});
