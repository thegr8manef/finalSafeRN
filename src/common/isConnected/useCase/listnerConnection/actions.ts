import {
  LOAD_CONNECTION_STATE,
  LOAD_CONNECTION_STATE_FAILED,
  LOAD_CONNECTION_STATE_SUCCESS,
  LoadConnectionStateAction,
  LoadConnectionStateFailedAction,
  LoadConnectionStateSuccessAction,
} from './actionTypes';

export const loadConnectionStat = (): LoadConnectionStateAction => ({
  type: LOAD_CONNECTION_STATE,
});

export const loadConnectionStatSuccess = (
  isConnected: boolean,
): LoadConnectionStateSuccessAction => ({
  type: LOAD_CONNECTION_STATE_SUCCESS,
  payload: isConnected,
});

export const loadConnectionStatFailed = (
  error: string,
): LoadConnectionStateFailedAction => ({
  type: LOAD_CONNECTION_STATE_FAILED,
  payload: error,
});
