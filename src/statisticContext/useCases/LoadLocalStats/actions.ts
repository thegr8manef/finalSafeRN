import {Stat} from '../../domain/entity/Stat';
import {
  LOAD_LOCAL_STATS,
  LOAD_LOCAL_STATS_FAILED,
  LOAD_LOCAL_STATS_SUCCESS,
  LoadLocalStatsAction,
  LoadLocalStatsFailedAction,
  LoadLocalStatsSuccessAction,
} from './actionTypes';

export const loadLocalStats = (): LoadLocalStatsAction => ({
  type: LOAD_LOCAL_STATS,
});

export const loadLocalStatsSuccess = (
  statistic: Stat,
): LoadLocalStatsSuccessAction => ({
  type: LOAD_LOCAL_STATS_SUCCESS,
  payload: statistic,
});

export const loadLocalStatsFailed = (
  error: string,
): LoadLocalStatsFailedAction => ({
  type: LOAD_LOCAL_STATS_FAILED,
  payload: error,
});
