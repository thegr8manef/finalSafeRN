import {SaveStatState} from '../../configuration/state';
import {
  SAVE_STAT,
  SAVE_STAT_FAILED,
  SAVE_STAT_SUCCESS,
  StatActionTypes,
} from './actionTypes';

const initialState: SaveStatState = {
  loading: false,
  error: undefined,
};

export const reducerSaveStatInLocal = (
  state = initialState,
  action: StatActionTypes,
): SaveStatState => {
  switch (action.type) {
    case SAVE_STAT:
      return {loading: true, error: undefined};

    case SAVE_STAT_SUCCESS:
      return {loading: false, error: undefined};

    case SAVE_STAT_FAILED:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
