import {combineEpics} from 'redux-observable';
import {flashEpic} from '../useCases/Flash/epic';
export const visitsRootEpics = combineEpics(flashEpic);
