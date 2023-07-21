import {
  SearchChantierActionFailed,
  SearchChantierActionSuccess,
  SEARCH_CHANTIER,
  SEARCH_CHANTIER_FAILED,
  SEARCH_CHANTIER_SUCCESS,
  SearchChantierAction,
} from './actionTypes';

export const SearchChantier = (chantier: string): SearchChantierAction => ({
  type: SEARCH_CHANTIER,
  payload: chantier,
});
export const SearchChantierFailed = (
  error: string,
): SearchChantierActionFailed => ({
  type: SEARCH_CHANTIER_FAILED,
  payload: error,
});
export const SearchChantierSuccess = (
  chantier: string,
): SearchChantierActionSuccess => ({
  type: SEARCH_CHANTIER_SUCCESS,
  payload: chantier,
});
