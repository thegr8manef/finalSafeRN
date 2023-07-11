import {StatDto} from '../../adapters/secondaires/dto/stat.dto';

import {
  SAVE_STAT,
  SAVE_STAT_FAILED,
  SAVE_STAT_SUCCESS,
  SaveStatAction,
  SaveStatActionFailed,
  SaveStatActionSuccess,
} from './actionTypes';

export const saveStat = (stat: StatDto): SaveStatAction => ({
  type: SAVE_STAT,
  payload: stat,
});

export const saveStatSuccess = (): SaveStatActionSuccess => ({
  type: SAVE_STAT_SUCCESS,
});

export const saveStatActionFailed = (error: string): SaveStatActionFailed => ({
  type: SAVE_STAT_FAILED,
  payload: error,
});
