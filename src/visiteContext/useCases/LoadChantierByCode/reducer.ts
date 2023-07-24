import {FlashState, LoadchantierByCodeState} from '../../configuration/state';
import {
  LOAD_CHANTIER_BY_CODE_FAILED,
  LOAD_CHANTIER_BY_CODE_SUCCESS,
  LOAD_CHANTIER_BY_CODE,
  LoadChantierActionTypes,
} from './actionTypes';

let initialState: LoadchantierByCodeState;
initialState = {
  errorLoadingChantierByCode: undefined,
  LoadingChantierByCodeSuccess: null,
  LoadingChantierByCode: false,
};

export const reducerLoadChantier = (
  state = initialState,
  action: LoadChantierActionTypes,
): LoadchantierByCodeState => {
  switch (action.type) {
    case LOAD_CHANTIER_BY_CODE:
      return {
        errorLoadingChantierByCode: undefined,
        LoadingChantierByCodeSuccess: null,
        LoadingChantierByCode: true,
      };

    case LOAD_CHANTIER_BY_CODE_SUCCESS:
      return {
        errorLoadingChantierByCode: undefined,
        LoadingChantierByCodeSuccess: action.payload,
        LoadingChantierByCode: true,
      };

    case LOAD_CHANTIER_BY_CODE_FAILED:
      return {
        errorLoadingChantierByCode: action.payload,
        LoadingChantierByCodeSuccess: null,
        LoadingChantierByCode: false,
      };
    default:
      return state;
  }
};
