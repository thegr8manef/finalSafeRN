import {FlashState, LoadChantierState} from '../../configuration/state';
import {
  LOAD_CHANTIER_FAILED,
  LOAD_CHANTIER_SUCCESS,
  LOAD_CHANTIER,
  LoadChantierActionTypes,
} from './actionTypes';

let initialState: LoadChantierState;
initialState = {
  errorLoadingChantier: undefined,
  LoadingChantierSuccess: undefined,
  LoadingChantier: undefined,
};

export const reducerLoadChantier = (
  state = initialState,
  action: LoadChantierActionTypes,
): LoadChantierState => {
  switch (action.type) {
    case LOAD_CHANTIER:
      return {
        errorLoadingChantier: undefined,
        LoadingChantierSuccess: action.payload,
        LoadingChantier: action.payload,
      };

    case LOAD_CHANTIER_SUCCESS:
      return {
        errorLoadingChantier: undefined,
        LoadingChantierSuccess: action.payload,
        LoadingChantier: action.payload,
      };

    case LOAD_CHANTIER_FAILED:
      return {
        errorLoadingChantier: action.payload,
        LoadingChantierSuccess: undefined,
        LoadingChantier: undefined,
      };
    default:
      return state;
  }
};
