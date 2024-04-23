import {
  LOAD_REMOTE_STATS,
  LOAD_REMOTE_STATS_FAILED,
  LOAD_REMOTE_STATS_SUCCESS,
  LoadRemoteStatsAction,
  LoadRemoteStatsFailedAction,
  LoadRemoteStatsSuccessAction,
} from './actionTypes';
import {Stat} from '../../domain/entity/Stat';

export const loadRemoteStats = (payload?: any): LoadRemoteStatsAction => ({
  type: LOAD_REMOTE_STATS,
  payload: payload,
});
export const loadRemoteStatsFailed = (
  error: string,
): LoadRemoteStatsFailedAction => ({
  type: LOAD_REMOTE_STATS_FAILED,
  payload: error,
});
export const loadRemoteStatsSuccess = (
  stat: Stat,
): LoadRemoteStatsSuccessAction => ({
  type: LOAD_REMOTE_STATS_SUCCESS,
  payload: stat,
});
