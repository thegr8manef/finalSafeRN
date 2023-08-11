import {Stat} from '../../domain/entity/Stat';

export const LOAD_REMOTE_STATS = 'LOAD_REMOTE_STATS';

export const LOAD_REMOTE_STATS_SUCCESS = 'LOAD_REMOTE_STATS_SUCCESS';

export const LOAD_REMOTE_STATS_FAILED = 'LOAD_REMOTE_STATS_FAILED';

export interface LoadRemoteStatsAction {
  type: typeof LOAD_REMOTE_STATS;
}

export interface LoadRemoteStatsSuccessAction {
  type: typeof LOAD_REMOTE_STATS_SUCCESS;
  payload: Stat;
}

export interface LoadRemoteStatsFailedAction {
  type: typeof LOAD_REMOTE_STATS_FAILED;
  payload: string;
}

export type LoadRemoteStatsActionTypes =
  | LoadRemoteStatsAction
  | LoadRemoteStatsSuccessAction
  | LoadRemoteStatsFailedAction;
