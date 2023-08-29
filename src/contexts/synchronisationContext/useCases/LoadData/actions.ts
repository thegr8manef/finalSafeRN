import {
  LOAD_DATA,
  LOAD_DATA_FAILED,
  LOAD_DATA_SUCCESS,
  LoadDataAction,
  LoadDataFailedAction,
  LoadDataSuccessAction,
} from './actionTypes';

export const loadData = (_accessToken: string, _lastUpdate : string): LoadDataAction => ({
  type: LOAD_DATA,
  payload: {
    "accessToken" : _accessToken,
    "lastUpdate"  : _lastUpdate
  } 
});

export const loadDataSuccess = (): LoadDataSuccessAction => ({
  type: LOAD_DATA_SUCCESS,
});

export const loadDataFailed = (error: string): LoadDataFailedAction => ({
  type: LOAD_DATA_FAILED,
  payload: error,
});
