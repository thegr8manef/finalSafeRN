import {combineEpics} from 'redux-observable';
import {statEpic} from '../useCases/Dashboard/epic';

export const dashboardRootEpics = combineEpics(statEpic);
