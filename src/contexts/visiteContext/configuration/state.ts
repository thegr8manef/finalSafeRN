
import  Remarque  from '../domain/entity/Remarque';
import { Site } from '../domain/entity/Site';
import { Visits } from '../domain/entity/Visits';

export interface VisitsState {
  saveFlash    : SaveFlashState;
  loadSites    : LoadSitesState;
  loadVisits   : LoadVisitsState;
  loadRemarques : LoadRemarquesState
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
  visits: Visits | undefined;
}

export interface LoadRemarquesState {
  error      : string     | undefined;
  remarques  : Remarque[] | undefined;
  loading    : boolean;
}

