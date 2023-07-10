import {combineReducers} from 'redux';
import {DashboardState} from './state';
import {reducerStat} from '../useCases/Dashboard/reducer';
import {reducerSaveStatInLocal} from '../useCases/saveInLocal/reducer';

export const reducerDashboard = combineReducers<DashboardState>({
  stat: reducerStat,
  saveStat: reducerSaveStatInLocal,
});
