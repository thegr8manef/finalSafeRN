import {FlashState, SearchChantierState} from '../../configuration/state';
import {
  SEARCH_CHANTIER_FAILED,
  SEARCH_CHANTIER_SUCCESS,
  SEARCH_CHANTIER,
  SearchChantierActionTypes,
} from './actionTypes';

let initialState: SearchChantierState;
initialState = {
  errorSearchChantier: undefined,
  SearchChantierSuccess: undefined,
};

export const reducerSearchChantier = (
  state = initialState,
  action: SearchChantierActionTypes,
): SearchChantierState => {
  switch (action.type) {
    case SEARCH_CHANTIER:
      return {
        errorSearchChantier: undefined,
        SearchChantierSuccess: action.payload,
      };

    case SEARCH_CHANTIER_SUCCESS:
      return {
        errorSearchChantier: undefined,
        SearchChantierSuccess: action.payload,
      };

    case SEARCH_CHANTIER_FAILED:
      return {
        errorSearchChantier: action.payload,
        SearchChantierSuccess: undefined,
      };
    default:
      return state;
  }
};
