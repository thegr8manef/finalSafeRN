import { combineEpics } from 'redux-observable';
import { loadSitesEpic } from '@contexts/visiteContext/useCases/LoadSites/epic';
import { saveVisitFlashEpic } from '../useCases/saveFlash/epic';
import { loadVisitsEpic } from '../useCases/LoadVisits/epic';
import { loadRemarquesEpic } from '../useCases/LoadRemarque/epic';
import { deleteVisitEpic } from '../useCases/DeleteVisits/epic';
import { saveVisitEpic } from '../useCases/SaveVisit/epic';

export const visitsRootEpics = combineEpics(
  saveVisitFlashEpic,
  loadSitesEpic,
  loadVisitsEpic,
  loadRemarquesEpic,
  deleteVisitEpic,
  saveVisitEpic
);
