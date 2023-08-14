import {combineEpics} from 'redux-observable';
import {loadSiteEpic} from '../useCases/LoadSiteByCode/epic';
import {saveVisitFlashEpic} from '../useCases/saveFlash/epic';

export const visitsRootEpics = combineEpics(
  saveVisitFlashEpic,
  loadSiteEpic,
);
