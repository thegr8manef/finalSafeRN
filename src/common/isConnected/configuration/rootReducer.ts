import {combineReducers} from 'redux';
import {ConnectionStatus} from './state';
import {reducerLoadConnectionStatus} from '../useCase/loadConnectionStatus/reducer';

export const reducerConnection = combineReducers<ConnectionStatus>({
  loadConnectionStatus: reducerLoadConnectionStatus,
});
