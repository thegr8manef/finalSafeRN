import { Site } from '../domain/entity/Site';
import { Visit } from '../domain/entity/Visit';

export interface VisitsState {
  saveFlash: SaveFlashState;
  loadSites: LoadSitesState;
  loadVisits : LoadVisitsState;
}
export interface SaveFlashState {
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

