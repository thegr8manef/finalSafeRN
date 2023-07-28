import {combineEpics} from 'redux-observable';
import {loadRemoteStatsEpic} from '../useCases/LoadRemoteStats/epic';
import {saveStatsEpic} from '../useCases/saveStats/epic';
import {loadLocalStatsEpic} from '../useCases/LoadLocalStats/epic';
export const statisticRootEpics = combineEpics(
  loadRemoteStatsEpic,
  saveStatsEpic,
  loadLocalStatsEpic,
);
