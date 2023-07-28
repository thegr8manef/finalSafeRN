import {Stat} from '../../domain/entity/Stat';
import {
  SAVE_STATS,
  SAVE_STATS_FAILED,
  SAVE_STATS_SUCCESS,
  SaveStatsAction,
  SaveStatsActionFailed,
  SaveStatsActionSuccess,
} from './actionTypes';

export const saveStats = (stat: Stat): SaveStatsAction => ({
  type: SAVE_STATS,
  payload: stat,
});

export const saveStatsSuccess = (): SaveStatsActionSuccess => ({
  type: SAVE_STATS_SUCCESS,
});

export const saveStatsFailed = (error: string): SaveStatsActionFailed => ({
  type: SAVE_STATS_FAILED,
  payload: error,
});
