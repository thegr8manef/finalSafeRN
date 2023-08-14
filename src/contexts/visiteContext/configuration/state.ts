import {Site} from '../domain/entity/Site';

export interface VisitsState {
  saveFlash: SaveFlashState;
  loadSites: LoadSitesState;
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
