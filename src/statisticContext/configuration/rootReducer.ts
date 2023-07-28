import {combineReducers} from 'redux';
import {StatisticState} from './state';
import {loadRemoteStatsReducer} from '../useCases/LoadRemoteStats/reducer';
import {saveStatsReducer} from '../useCases/saveStats/reducer';
import {loadLocalStatsReducer} from '../useCases/LoadLocalStats/reducer';

export const statisticReducer = combineReducers<StatisticState>({
  loadRemoteStats: loadRemoteStatsReducer,
  saveStats: saveStatsReducer,
  loadLocalStats: loadLocalStatsReducer,
});
