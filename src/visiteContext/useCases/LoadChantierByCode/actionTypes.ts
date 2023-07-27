import {Chantier} from '../../domain/entity/Chantier';

export const LOAD_CHANTIER_BY_CODE = 'LOAD_CHANTIER_BY_CODE';
export const LOAD_CHANTIER_BY_CODE_SUCCESS = 'LOAD_CHANTIER_BY_CODE_SUCCESS';
export const LOAD_CHANTIER_BY_CODE_FAILED = 'LOAD_CHANTIER_BY_CODE_FAILED';

export interface LoadChantierByCodeAction {
  type: typeof LOAD_CHANTIER_BY_CODE;
  payload: string;
}

export interface LoadChantierByCodeActionFailed {
  type: typeof LOAD_CHANTIER_BY_CODE_FAILED;
  payload: string;
}

export interface LoadChantierByCodeActionSuccess {
  type: typeof LOAD_CHANTIER_BY_CODE_SUCCESS;
  payload: Chantier;
}

export type LoadChantierActionTypes =
  | LoadChantierByCodeAction
  | LoadChantierByCodeActionSuccess
  | LoadChantierByCodeActionFailed;
