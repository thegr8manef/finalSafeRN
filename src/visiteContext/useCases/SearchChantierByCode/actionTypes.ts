import {Flash} from '../../domain/entity/Flash';

export const SEARCH_CHANTIER = 'SEARCH_CHANTIER';
export const SEARCH_CHANTIER_SUCCESS = 'SEARCH_CHANTIER_SUCCESS';
export const SEARCH_CHANTIER_FAILED = 'SEARCH_CHANTIER_FAILED';

export interface SearchChantierAction {
  type: typeof SEARCH_CHANTIER;
  payload: string;
}

export interface SearchChantierActionFailed {
  type: typeof SEARCH_CHANTIER_FAILED;
  payload: string;
}

export interface SearchChantierActionSuccess {
  type: typeof SEARCH_CHANTIER_SUCCESS;
  payload: string;
}

export type SearchChantierActionTypes =
  | SearchChantierAction
  | SearchChantierActionSuccess
  | SearchChantierActionFailed;
