import {Site} from '../../domain/entity/Site';

export const LOAD_SITE_BY_CODE = 'LOAD_SITE_BY_CODE';
export const LOAD_SITE_BY_CODE_SUCCESS = 'LOAD_SITE_BY_CODE_SUCCESS';
export const LOAD_SITE_BY_CODE_FAILED = 'LOAD_SITE_BY_CODE_FAILED';

export interface LoadSiteByCodeAction {
  type: typeof LOAD_SITE_BY_CODE;
  payload: string;
}

export interface LoadSiteByCodeActionFailed {
  type: typeof LOAD_SITE_BY_CODE_FAILED;
  payload: string;
}

export interface LoadSiteByCodeActionSuccess {
  type: typeof LOAD_SITE_BY_CODE_SUCCESS;
  payload: Site;
}

export type LoadSiteActionTypes =
  | LoadSiteByCodeAction
  | LoadSiteByCodeActionSuccess
  | LoadSiteByCodeActionFailed;
