import {combineEpics} from 'redux-observable';
import {statEpic} from '../useCases/Dashboard/epic';
import {saveStatInLocal} from '../useCases/saveInLocal/epic';
export const dashboardRootEpics = combineEpics(statEpic, saveStatInLocal);
