import {combineEpics} from 'redux-observable';
import {statEpic} from '../useCases/LoadStat/epic';
import {saveStatInLocal} from '../useCases/saveInLocal/epic';
import {loadLocalStatEpic} from '../useCases/LoadLocalStat/epic';
export const dashboardRootEpics = combineEpics(
  statEpic,
  saveStatInLocal,
  loadLocalStatEpic,
);
