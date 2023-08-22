import { Remarque } from '@common/adapters/secondaries/db/entity/Remarque';
import { Site } from '../domain/entity/Site';
import { Visit } from '../domain/entity/Visit';

export interface VisitsState {
  saveFlash: SaveFlashState;
  loadSites: LoadSitesState;
  loadVisits: LoadVisitsState;
  saveVisit : SaveVisitState;
}
export interface SaveFlashState {
  error: string | undefined;
  loading: boolean;
  createdRemark : Remarque | undefined;
}
export interface SaveVisitState {
  error: string | undefined;
  loading: boolean;
}
export interface LoadSitesState {
  error: string | undefined;
  sites: Site[] | null;
  loading: boolean;
}
export interface LoadVisitsState {
  loading: boolean;
  error: string | undefined;
  visits: Visit[] | undefined;
}

