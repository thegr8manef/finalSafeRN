import {Site} from '../../domain/entity/Site';

export const LOAD_SITES = 'LOAD_SITES';
export const LOAD_SITES_SUCCESS = 'LOAD_SITES_SUCCESS';
export const LOAD_SITES_FAILED = 'LOAD_SITES_FAILED';

export interface LoadSitesAction {
  type: typeof LOAD_SITES;
}

export interface LoadSitesFailedAction {
  type: typeof LOAD_SITES_FAILED;
  payload: string;
}

export interface LoadSitesSuccessAction {
  type: typeof LOAD_SITES_SUCCESS;
  payload: Site[];
}

export type LoadSitesActionTypes =
  | LoadSitesAction
  | LoadSitesSuccessAction
  | LoadSitesFailedAction;
