import {Site} from '../domain/entity/Site';

export interface VisitsState {
  saveFlash: SaveFlashState;
  loadSiteByCode: LoadSiteByCodeState;
}
export interface SaveFlashState {
  error: string | undefined;
  loading: boolean;
}
export interface LoadSiteByCodeState {
  error: string | undefined;
  site: Site | null;
  loading: boolean;
}
