import {combineReducers} from 'redux';
import {SynchronisationState} from './state';
import {reducerLoadData} from '../useCases/LoadData/reducer';

export const reducerSynchronisation = combineReducers<SynchronisationState>({
  loadData: reducerLoadData,
});
