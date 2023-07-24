import {Chantier} from '../../domain/entity/Chantier';
import {
  LoadChantierByCodeActionFailed,
  LoadChantierByCodeActionSuccess,
  LOAD_CHANTIER_BY_CODE,
  LOAD_CHANTIER_BY_CODE_FAILED,
  LOAD_CHANTIER_BY_CODE_SUCCESS,
  LoadChantierByCodeAction,
} from './actionTypes';

export const LoadChantierByCode = (code: string): LoadChantierByCodeAction => ({
  type: LOAD_CHANTIER_BY_CODE,
  payload: code,
});
export const LoadChantierByCodeFailed = (
  error: string,
): LoadChantierByCodeActionFailed => ({
  type: LOAD_CHANTIER_BY_CODE_FAILED,
  payload: error,
});
export const LoadChantierByCodeSuccess = (
  chantier: Chantier,
): LoadChantierByCodeActionSuccess => ({
  type: LOAD_CHANTIER_BY_CODE_SUCCESS,
  payload: chantier,
});
