import {Chantier} from '../../../adapters/secondaries/db/entity/Chantier';
import {
  LOAD_DATA,
  LOAD_DATA_FAILED,
  LOAD_DATA_SUCCESS,
  LoadData,
  LoadDataFailed,
  LoadDataSuccess,
} from './actionTypes';

export const loadData = (accessToken: string): LoadData => ({
  type: LOAD_DATA,
  payload: accessToken,
});

export const loadDataSuccess = (): LoadDataSuccess => ({
  type: LOAD_DATA_SUCCESS,
});

export const loadDataFailed = (error: string): LoadDataFailed => ({
  type: LOAD_DATA_FAILED,
  payload: error,
});
