import {Statistic} from '../../../common/adapters/secondaries/db/entity/Statistic';
import {LoadLocalProfileFailedAction} from '../../../profileContext/useCases/LoadLocalProfile/actionType';
import {StatDto} from '../../adapters/secondaires/dto/stat.dto';
import {Stat} from '../../domain/entity/Stat';
import {
  LOAD_LOCAL_STAT,
  LOAD_LOCAL_STAT_FAILED,
  LOAD_LOCAL_STAT_SUCCESS,
  LoadLocalStatAction,
  LoadLocalStatActionFailed,
  LoadLocalStatActionSuccess,
} from './actionTypes';

export const loadLocalStat = (): LoadLocalStatAction => ({
  type: LOAD_LOCAL_STAT,
});

export const loadLocalStatSuccess = (
  statistic: Stat,
): LoadLocalStatActionSuccess => ({
  type: LOAD_LOCAL_STAT_SUCCESS,
  payload: statistic,
});

export const loadLocalStatFailed = (
  error: string,
): LoadLocalStatActionFailed => ({
  type: LOAD_LOCAL_STAT_FAILED,
  payload: error,
});
