import { Accompagnants } from '../domain/entity/Accompagnant';
import Remarque from '../domain/entity/Remarque';
import { Site } from '../domain/entity/Site';
import { Visit } from '../domain/entity/Visit';
import { VisitFlash } from '../domain/entity/VisitFlash';

export interface VisitsState {
  saveFlash: SaveFlashState;
  loadSites: LoadSitesState;
  loadVisits: LoadVisitsState;
  loadFlash:LoadFlashState;
  saveVisit : SaveVisitState;
  loadRemarques: LoadRemarquesState;
  deleteVisits : DeleteVisitsState;
  LoadAccompagnants: LoadAccompagnantsState;

}
export interface SaveFlashState {
  error: string | undefined;
  loading: boolean;
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
  visits: Visit[]|  undefined;
}
export interface LoadFlashState {
  loading: boolean;
  error: string | undefined;
  flash: VisitFlash[] | undefined;
}


export interface SaveFlashState {
  error      : string | undefined;
  loading    : boolean;
}
export interface LoadSitesState {
  error      : string      | undefined;
  sites      : Site[]      | null;
  loading    : boolean;
}

export interface LoadRemarquesState {
  error      : string     | undefined;
  remarques  : Remarque[] | undefined;
  loading    : boolean;
}

export interface DeleteVisitsState {
  error     : string       | undefined,
  loading   : boolean 
}
export interface LoadAccompagnantsState {
  error      : string     | undefined;
  Accompagnant  : Accompagnants[] | undefined;
  loading    : boolean;
}