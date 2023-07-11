import {Statistic} from '../../../common/adapters/secondaries/db/entity/Statistic';
import {StatDto} from '../../adapters/secondaires/dto/stat.dto';
import {Stat} from '../../domain/entity/Stat';

export const LOAD_LOCAL_STAT = 'LOAD_LOCAL_STAT';
export const LOAD_LOCAL_STAT_SUCCESS = 'LOAD_LOCAL_STAT_SUCCESS';
export const LOAD_LOCAL_STAT_FAILED = 'LOAD_LOCAL_STAT_FAILED';

export interface LoadLocalStatAction {
  type: typeof LOAD_LOCAL_STAT;
}

export interface LoadLocalStatActionSuccess {
  type: typeof LOAD_LOCAL_STAT_SUCCESS;
  payload: Stat;
}
export interface LoadLocalStatActionFailed {
  type: typeof LOAD_LOCAL_STAT_FAILED;
  payload: string;
}

export type LoadLocalStatActionTypes =
  | LoadLocalStatAction
  | LoadLocalStatActionSuccess
  | LoadLocalStatActionFailed;
