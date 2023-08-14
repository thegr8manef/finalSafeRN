import {Stat} from '../../domain/entity/Stat';

export const SAVE_STATS = 'SAVE_STATS';
export const SAVE_STATS_SUCCESS = 'SAVE_STATS_SUCCESS';
export const SAVE_STATS_FAILED = 'SAVE_STATS_FAILED';

export interface SaveStatsAction {
  type: typeof SAVE_STATS;
  payload: Stat;
}

export interface SaveStatsActionSuccess {
  type: typeof SAVE_STATS_SUCCESS;
}
export interface SaveStatsActionFailed {
  type: typeof SAVE_STATS_FAILED;
  payload: string;
}

export type SaveStatsActionTypes =
  | SaveStatsAction
  | SaveStatsActionSuccess
  | SaveStatsActionFailed;
