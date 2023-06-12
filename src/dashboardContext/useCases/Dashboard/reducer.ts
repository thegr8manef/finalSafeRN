import {StatState} from '../../configuration/state';
import {
  LOAD_STAT,
  LOAD_STAT_FAILED,
  LOAD_STAT_SUCCESS,
  StatActionTypes,
} from './actionTypes';
import {Stat} from '../../domain/entity/Stat';

const initialState: StatState = {
  loading: false,
  error: undefined,
  stat: undefined,
};

export const reducerStat = (
  state = initialState,
  action: StatActionTypes,
): StatState => {
  switch (action.type) {
    case LOAD_STAT:
      return {loading: true, error: undefined, stat: undefined};

    case LOAD_STAT_SUCCESS:
      return {loading: false, error: undefined, stat: action.payload};
    case LOAD_STAT_FAILED:
      return {loading: false, error: action.payload, stat: undefined};
    default:
      return state;
  }
};
