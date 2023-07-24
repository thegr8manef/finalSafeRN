import {combineEpics} from 'redux-observable';
import {VisitFlashEpic} from '../useCases/Flash/epic';
import {LoadChantierEpic} from '../useCases/LoadChantierByCode/epic';
export const visitsRootEpics = combineEpics(VisitFlashEpic, LoadChantierEpic);
