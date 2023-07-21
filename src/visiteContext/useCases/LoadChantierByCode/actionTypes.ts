import {Chantier} from '../../domain/entity/Chantier';
import {Flash} from '../../domain/entity/Flash';

export const LOAD_CHANTIER_BY_CODE = 'LOAD_CHANTIER_BY_CODE';
export const LOAD_CHANTIER_BY_CODE_SUCCESS = 'LOAD_CHANTIER_BY_CODE_SUCCESS';
export const LOAD_CHANTIER_BY_CODE_FAILED = 'LOAD_CHANTIER_BY_CODE_FAILED';

export interface LoadChantierAction {
  type: typeof LOAD_CHANTIER_BY_CODE;
  payload: Chantier;
}

export interface LoadChantierActionFailed {
  type: typeof LOAD_CHANTIER_BY_CODE_FAILED;
  payload: string;
}

export interface LoadChantierActionSuccess {
  type: typeof LOAD_CHANTIER_BY_CODE_SUCCESS;
  payload: boolean;
}

export type LoadChantierActionTypes =
  | LoadChantierAction
  | LoadChantierActionSuccess
  | LoadChantierActionFailed;
