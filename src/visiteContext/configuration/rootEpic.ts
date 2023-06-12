import {combineEpics} from 'redux-observable';
import {VisitFlashEpic} from '../useCases/Flash/epic';
export const visitsRootEpics = combineEpics(VisitFlashEpic);
