import {Statistic} from '../../../common/adapters/secondaries/db/entity/Statistic';

export const SAVE_STAT = 'SAVE_STAT';
export const SAVE_STAT_SUCCESS = 'SAVE_STAT_SUCCESS';
export const SAVE_STAT_FAILED = 'SAVE_STAT_FAILED';

export interface SaveStatAction {
  type: typeof SAVE_STAT;
  payload: Statistic;
}

export interface SaveStatActionSuccess {
  type: typeof SAVE_STAT_SUCCESS;
}
export interface SaveStatActionFailed {
  type: typeof SAVE_STAT_FAILED;
  payload: string;
}

export type StatActionTypes =
  | SaveStatAction
  | SaveStatActionSuccess
  | SaveStatActionFailed;
