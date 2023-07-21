import {
  LoadChantierActionFailed,
  LoadChantierActionSuccess,
  LOAD_CHANTIER,
  LOAD_CHANTIER_FAILED,
  LOAD_CHANTIER_SUCCESS,
  LoadChantierAction,
} from './actionTypes';

export const LoadChantier = (chantier: string): LoadChantierAction => ({
  type: LOAD_CHANTIER,
  payload: chantier,
});
export const LoadChantierFailed = (
  error: string,
): LoadChantierActionFailed => ({
  type: LOAD_CHANTIER_FAILED,
  payload: error,
});
export const LoadChantierSuccess = (
  chantier: string,
): LoadChantierActionSuccess => ({
  type: LOAD_CHANTIER_SUCCESS,
  payload: chantier,
});
