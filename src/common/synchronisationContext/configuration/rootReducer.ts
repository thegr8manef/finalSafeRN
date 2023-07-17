import {combineReducers} from 'redux';
import {SynchronisationState} from './state';
import {reducerLoadData} from '../useCases/SynchronisationLoad/reducer';
import {reducerSaveData} from '../useCases/SynchronisationSave/reducer';

export const reducerSynchronisation = combineReducers<SynchronisationState>({
  loadData: reducerLoadData,
  saveData: reducerSaveData,
});
