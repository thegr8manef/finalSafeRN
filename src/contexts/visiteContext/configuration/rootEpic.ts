import { combineEpics } from 'redux-observable';
import { loadSitesEpic } from '@contexts/visiteContext/useCases/LoadSites/epic';
import { saveVisitFlashEpic } from '../useCases/saveFlash/epic';
import { loadVisitsEpic } from '../useCases/LoadVisits/epic';
import { loadRemarquesEpic } from '../useCases/LoadRemarque/epic';
import { deleteVisitEpic } from '../useCases/DeleteVisits/epic';
import { saveVisitEpic } from '../useCases/SaveVisit/epic';
import { loadAccompagnantsEpic } from '../useCases/LoadAccompagnant/epic';
import { loadFlashEpic } from '../useCases/LoadFlash/epic';

export const visitsRootEpics = combineEpics(
  saveVisitFlashEpic,
  loadSitesEpic,
  loadVisitsEpic,
  loadFlashEpic,
  loadRemarquesEpic,
  deleteVisitEpic,
  saveVisitEpic,
  loadAccompagnantsEpic,
);
