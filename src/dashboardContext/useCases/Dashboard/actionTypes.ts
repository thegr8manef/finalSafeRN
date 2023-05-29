import {Stat } from "../../domain/entity/Stat";

export const STAT = 'STAT';

export const STAT_SUCCESS = 'STAT_SUCCESS';

export const STAT_FAILED = 'STAT_FAILED';

export interface StatAction {
  type: typeof STAT;
}


export interface StatActionSuccess {
  type: typeof STAT_SUCCESS;
  payload: Stat;
}

export interface StatActionFailed {
  type: typeof STAT_FAILED;
  payload: string;
}

export type StatActionTypes = StatAction | StatActionSuccess | StatActionFailed;
