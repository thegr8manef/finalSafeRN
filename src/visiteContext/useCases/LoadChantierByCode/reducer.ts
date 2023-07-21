import {FlashState, LoadchantierByCodeState} from '../../configuration/state';
import {
  LOAD_CHANTIER_BY_CODE_FAILED,
  LOAD_CHANTIER_BY_CODE_SUCCESS,
  LOAD_CHANTIER_BY_CODE,
  LoadChantierActionTypes,
} from './actionTypes';

let initialState: LoadchantierByCodeState;
initialState = {
  errorLoadingChantier: undefined,
  LoadingChantierSuccess: false,
  LoadingChantier: null,
};

export const reducerLoadChantier = (
  state = initialState,
  action: LoadChantierActionTypes,
): LoadchantierByCodeState => {
  switch (action.type) {
    case LOAD_CHANTIER_BY_CODE:
      return {
        errorLoadingChantier: undefined,
        LoadingChantierSuccess: true,
        LoadingChantier: action.payload,
      };

    case LOAD_CHANTIER_BY_CODE_SUCCESS:
      return {
        errorLoadingChantier: undefined,
        LoadingChantierSuccess: action.payload,
        LoadingChantier: action.payload,
      };

    case LOAD_CHANTIER_BY_CODE_FAILED:
      return {
        errorLoadingChantier: action.payload,
        LoadingChantierSuccess: false,
        LoadingChantier: null,
      };
    default:
      return state;
  }
};
