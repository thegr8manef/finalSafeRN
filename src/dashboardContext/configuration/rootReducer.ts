import {combineReducers} from 'redux';
import {DashboardState} from './state';
import {reducerStat} from '../useCases/Dashboard/reducer';

export const reducerDashboard = combineReducers<DashboardState>({
  stat: reducerStat,
});
