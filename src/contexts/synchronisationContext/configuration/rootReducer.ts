import {combineReducers} from 'redux';
import {SynchronisationState} from './state';
import {reducerLoadData} from '../useCases/LoadData/reducer';
import { reducerSendData } from '../useCases/SendData/reducer';

export const reducerSynchronisation = combineReducers<SynchronisationState>({
  loadData: reducerLoadData,
  sendData : reducerSendData
});
