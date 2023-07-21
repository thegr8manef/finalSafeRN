import {Flash} from '../../domain/entity/Flash';

export const LOAD_CHANTIER = 'LOAD_CHANTIER';
export const LOAD_CHANTIER_SUCCESS = 'LOAD_CHANTIER_SUCCESS';
export const LOAD_CHANTIER_FAILED = 'LOAD_CHANTIER_FAILED';

export interface LoadChantierAction {
  type: typeof LOAD_CHANTIER;
  payload: string;
}

export interface LoadChantierActionFailed {
  type: typeof LOAD_CHANTIER_FAILED;
  payload: string;
}

export interface LoadChantierActionSuccess {
  type: typeof LOAD_CHANTIER_SUCCESS;
  payload: string;
}

export type LoadChantierActionTypes =
  | LoadChantierAction
  | LoadChantierActionSuccess
  | LoadChantierActionFailed;
