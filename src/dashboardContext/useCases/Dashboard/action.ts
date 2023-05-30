import {
  STAT,
  STAT_FAILED,
  STAT_SUCCESS,
  StatAction,
  StatActionFailed,
  StatActionSuccess,
} from './actionTypes';
import {Stat} from '../../domain/entity/Stat';

export const stat = (): StatAction => ({
  type: STAT,
});
export const statFailed = (error: string): StatActionFailed => ({
  type: STAT_FAILED,
  payload: error,
});
export const statSuccess = (stat: Stat): StatActionSuccess => ({
  type: STAT_SUCCESS,
  payload: stat,
});
