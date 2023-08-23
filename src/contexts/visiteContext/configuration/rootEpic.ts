import {combineEpics} from 'redux-observable';
import {loadSitesEpic} from '@contexts/visiteContext/useCases/LoadSites/epic';
import {saveVisitFlashEpic} from '../useCases/saveFlash/epic';
import { loadVisitsEpic } from '../useCases/LoadVisits/epic';
import { loadRemarquesEpic } from '../useCases/LoadRemarque/epic';
import { deleteVisit } from '../useCases/DeleteVisits/actions';
import { deleteVisitEpic } from '../useCases/DeleteVisits/epic';

export const visitsRootEpics = combineEpics(
  saveVisitFlashEpic,
  loadSitesEpic,
  loadVisitsEpic,
  loadRemarquesEpic,
  deleteVisitEpic,
);
