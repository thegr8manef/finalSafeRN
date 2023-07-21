import {combineReducers} from 'redux';
import {SynchronisationState} from './state';
import {reducerLoadData} from '../useCases/LoadData/reducer';
import {reducerSaveData} from '../useCases/SaveInLocal/reducer';

export const reducerSynchronisation = combineReducers<SynchronisationState>({
  loadData: reducerLoadData,
  saveData: reducerSaveData,
});
