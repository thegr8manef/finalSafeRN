import {combineEpics} from 'redux-observable';
import {loadSitesEpic} from '@contexts/visiteContext/useCases/LoadSites/epic';
import {saveVisitFlashEpic} from '../useCases/saveFlash/epic';

export const visitsRootEpics = combineEpics(
  saveVisitFlashEpic,
  loadSitesEpic,
);
