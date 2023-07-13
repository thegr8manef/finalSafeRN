import {combineReducers} from 'redux';
import {ConnectionState} from './state';
import {reducerLoadConnectionState} from '../useCase/listnerConnection/reducer';

export const reducerConnection = combineReducers<ConnectionState>({
  loadConnectionState: reducerLoadConnectionState,
});
