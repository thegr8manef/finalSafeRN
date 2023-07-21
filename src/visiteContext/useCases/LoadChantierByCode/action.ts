import {Chantier} from '../../domain/entity/Chantier';
import {
  LoadChantierActionFailed,
  LoadChantierActionSuccess,
  LOAD_CHANTIER_BY_CODE,
  LOAD_CHANTIER_BY_CODE_FAILED,
  LOAD_CHANTIER_BY_CODE_SUCCESS,
  LoadChantierAction,
} from './actionTypes';

export const LoadChantier = (chantier: Chantier): LoadChantierAction => ({
  type: LOAD_CHANTIER_BY_CODE,
  payload: chantier,
});
export const LoadChantierFailed = (
  error: string,
): LoadChantierActionFailed => ({
  type: LOAD_CHANTIER_BY_CODE_FAILED,
  payload: error,
});
export const LoadChantierSuccess = (
  chantier: boolean,
): LoadChantierActionSuccess => ({
  type: LOAD_CHANTIER_BY_CODE_SUCCESS,
  payload: chantier,
});
