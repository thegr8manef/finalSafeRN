import {Stat} from '../../domain/entity/Stat';

export const LOAD_STAT = 'STAT';

export const LOAD_STAT_SUCCESS = 'STAT_SUCCESS';

export const LOAD_STAT_FAILED = 'STAT_FAILED';

export interface StatAction {
  type: typeof LOAD_STAT;
}

export interface StatActionSuccess {
  type: typeof LOAD_STAT_SUCCESS;
  payload: Stat;
}

export interface StatActionFailed {
  type: typeof LOAD_STAT_FAILED;
  payload: string;
}

export type StatActionTypes = StatAction | StatActionSuccess | StatActionFailed;
