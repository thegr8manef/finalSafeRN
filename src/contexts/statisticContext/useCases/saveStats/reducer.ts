import {SaveStatsState} from '../../configuration/state';
import {
  SAVE_STATS,
  SAVE_STATS_FAILED,
  SAVE_STATS_SUCCESS,
  SaveStatsActionTypes,
} from './actionTypes';

const initialState: SaveStatsState = {
  loading: false,
  error: undefined,
};

export const saveStatsReducer = (
  state = initialState,
  action: SaveStatsActionTypes,
): SaveStatsState => {
  switch (action.type) {
    case SAVE_STATS:
      return {loading: true, error: undefined};

    case SAVE_STATS_SUCCESS:
      return {loading: false, error: undefined};

    case SAVE_STATS_FAILED:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
