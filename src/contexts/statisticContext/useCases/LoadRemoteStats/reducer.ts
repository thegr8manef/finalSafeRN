import {LoadRemoteStatsState} from '../../configuration/state';
import {
  LOAD_REMOTE_STATS,
  LOAD_REMOTE_STATS_FAILED,
  LOAD_REMOTE_STATS_SUCCESS,
  LoadRemoteStatsActionTypes,
} from './actionTypes';

const initialState: LoadRemoteStatsState = {
  loading: false,
  error: undefined,
  stat: undefined,
};

export const loadRemoteStatsReducer = (
  state = initialState,
  action: LoadRemoteStatsActionTypes,
): LoadRemoteStatsState => {
  switch (action.type) {
    case LOAD_REMOTE_STATS:
      return {loading: true, error: undefined, stat: undefined};
    case LOAD_REMOTE_STATS_SUCCESS:
      return {loading: false, error: undefined, stat: action.payload};
    case LOAD_REMOTE_STATS_FAILED:
      return {loading: false, error: action.payload, stat: undefined};
    default:
      return state;
  }
};
