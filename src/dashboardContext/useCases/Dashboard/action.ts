import {
  LOAD_STAT,
  LOAD_STAT_FAILED,
  LOAD_STAT_SUCCESS,
  StatAction,
  StatActionFailed,
  StatActionSuccess,
} from './actionTypes';
import {Stat} from '../../domain/entity/Stat';

export const stat = (): StatAction => ({
  type: LOAD_STAT,
});
export const statFailed = (error: string): StatActionFailed => ({
  type: LOAD_STAT_FAILED,
  payload: error,
});
export const statSuccess = (stat: Stat): StatActionSuccess => ({
  type: LOAD_STAT_SUCCESS,
  payload: stat,
});
