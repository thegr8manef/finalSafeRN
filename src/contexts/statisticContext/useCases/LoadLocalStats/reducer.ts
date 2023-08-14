import {LocalStatsState} from '../../configuration/state';
import {
  LOAD_LOCAL_STATS,
  LOAD_LOCAL_STATS_FAILED,
  LOAD_LOCAL_STATS_SUCCESS,
  LoadLocalStatsActionTypes,
} from './actionTypes';

const initialState: LocalStatsState = {
  stat: undefined,
  loading: false,
  error: undefined,
};

export const loadLocalStatsReducer = (
  state = initialState,
  action: LoadLocalStatsActionTypes,
): LocalStatsState => {
  switch (action.type) {
    case LOAD_LOCAL_STATS:
      return {loading: true, error: undefined, stat: undefined};

    case LOAD_LOCAL_STATS_SUCCESS:
      return {loading: false, error: undefined, stat: action.payload};

    case LOAD_LOCAL_STATS_FAILED:
      return {loading: false, error: action.payload, stat: undefined};
    default:
      return state;
  }
};
