import {Stat} from '../../domain/entity/Stat';

export const LOAD_LOCAL_STATS = 'LOAD_LOCAL_STATS';
export const LOAD_LOCAL_STATS_SUCCESS = 'LOAD_LOCAL_STATS_SUCCESS';
export const LOAD_LOCAL_STATS_FAILED = 'LOAD_LOCAL_STATS_FAILED';

export interface LoadLocalStatsAction {
  type: typeof LOAD_LOCAL_STATS;
}

export interface LoadLocalStatsSuccessAction {
  type: typeof LOAD_LOCAL_STATS_SUCCESS;
  payload: Stat;
}
export interface LoadLocalStatsFailedAction {
  type: typeof LOAD_LOCAL_STATS_FAILED;
  payload: string;
}

export type LoadLocalStatsActionTypes =
  | LoadLocalStatsAction
  | LoadLocalStatsSuccessAction
  | LoadLocalStatsFailedAction;
