import {LoaclStatState, StatState} from '../../configuration/state';
import {
  LOAD_LOCAL_STAT,
  LOAD_LOCAL_STAT_FAILED,
  LOAD_LOCAL_STAT_SUCCESS,
  LoadLocalStatActionTypes,
} from './actionTypes';

const initialState: LoaclStatState = {
  stat: undefined,
  loading: false,
  error: undefined,
};

export const reducerLoadLocalStat = (
  state = initialState,
  action: LoadLocalStatActionTypes,
): LoaclStatState => {
  switch (action.type) {
    case LOAD_LOCAL_STAT:
      return {loading: true, error: undefined, stat: undefined};

    case LOAD_LOCAL_STAT_SUCCESS:
      return {loading: false, error: undefined, stat: action.payload};

    case LOAD_LOCAL_STAT_FAILED:
      return {loading: false, error: action.payload, stat: undefined};
    default:
      return state;
  }
};
