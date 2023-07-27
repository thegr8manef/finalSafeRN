import {combineEpics} from 'redux-observable';
import {loadChantierEpic} from '../useCases/LoadChantierByCode/epic';
import {saveVisitFlashEpic} from '../useCases/saveFlash/epic';

export const visitsRootEpics = combineEpics(
  saveVisitFlashEpic,
  loadChantierEpic,
);
