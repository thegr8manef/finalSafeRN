import {LoadRemarquesState} from '../../configuration/state';
import {
  LOAD_REMARQUES_FAILED,
  LOAD_REMARQUES_SUCCESS,
  LOAD_REMARQUES,
  LoadRemarquesActionTypes,
} from './actionTypes';

const initialState: LoadRemarquesState= {
  error: undefined,
  remarques: undefined,
  loading: false,
};

export const reducerLoadRemarques = (
  state = initialState,
  action: LoadRemarquesActionTypes,
): LoadRemarquesState => {
  switch (action.type) {

    case LOAD_REMARQUES:
      return { error: undefined, remarques: undefined, loading: true };

    case LOAD_REMARQUES_SUCCESS:
      return { error: undefined, remarques: action.payload, loading: false };

    case LOAD_REMARQUES_FAILED:
      return { error: action.payload, remarques: undefined, loading: false, };
      
    default:
      return state;
  }
};
