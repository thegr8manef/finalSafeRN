import { combineEpics } from 'redux-observable';
import { loadSitesEpic } from '@contexts/visiteContext/useCases/LoadSites/epic';
import { saveVisitFlashEpic } from '../useCases/saveFlash/epic';
import { loadVisitsEpic } from '../useCases/LoadVisits/epic';
import { saveVisitEpic } from '../useCases/SaveVisit/epic';

export const visitsRootEpics = combineEpics(
  saveVisitFlashEpic,
  loadSitesEpic,
  loadVisitsEpic,
  saveVisitEpic
);
