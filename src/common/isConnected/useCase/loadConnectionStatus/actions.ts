import {
  LOAD_CONNECTION_STATUS,
  LOAD_CONNECTION_STATUS_FAILED,
  LOAD_CONNECTION_STATUS_SUCCESS,
  LoadConnectionStatusAction,
  LoadConnectionStatusFailedAction,
  LoadConnectionStatusSuccessAction,
  SET_CONNECTION_STATUS,
  SetConnectionStatusAction,
} from './actionTypes';

export const loadConnectionStatus = (): LoadConnectionStatusAction => ({
  type: LOAD_CONNECTION_STATUS,
});

export const loadConnectionStatusSuccess = (
  isConnected: boolean,
): LoadConnectionStatusSuccessAction => ({
  type: LOAD_CONNECTION_STATUS_SUCCESS,
  payload: isConnected,
});

export const loadConnectionStatusFailed = (
  error: string,
): LoadConnectionStatusFailedAction => ({
  type: LOAD_CONNECTION_STATUS_FAILED,
  payload: error,
});

export const setConnectionStatus = (
  connectionStatus: boolean,
): SetConnectionStatusAction => ({
  type: SET_CONNECTION_STATUS,
  payload: connectionStatus,
});
