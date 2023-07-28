import {LoadchantierByCodeState} from '../../configuration/state';
import {
  LOAD_CHANTIER_BY_CODE_FAILED,
  LOAD_CHANTIER_BY_CODE_SUCCESS,
  LOAD_CHANTIER_BY_CODE,
  LoadChantierActionTypes,
} from './actionTypes';

const initialState: LoadchantierByCodeState= {
  error: undefined,
  chantier: null,
  loading: false,
};

export const reducerLoadChantier = (
  state = initialState,
  action: LoadChantierActionTypes,
): LoadchantierByCodeState => {
  switch (action.type) {
    case LOAD_CHANTIER_BY_CODE:
      return {
        error: undefined,
        chantier: null,
        loading: true,
      };

    case LOAD_CHANTIER_BY_CODE_SUCCESS:
      return {
        error: undefined,
        chantier: action.payload,
        loading: true,
      };

    case LOAD_CHANTIER_BY_CODE_FAILED:
      return {
        error: action.payload,
        chantier: null,
        loading: false,
      };
    default:
      return state;
  }
};
