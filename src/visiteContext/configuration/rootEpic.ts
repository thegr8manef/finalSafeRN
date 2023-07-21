import {combineEpics} from 'redux-observable';
import {VisitFlashEpic} from '../useCases/Flash/epic';
import {SearchChantierEpic} from '../useCases/SearchChantierByCode/epic';
export const visitsRootEpics = combineEpics(VisitFlashEpic, SearchChantierEpic);
