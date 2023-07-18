import {
  LOAD_CONNECTION_STATE,
  LOAD_CONNECTION_STATE_FAILED,
  LOAD_CONNECTION_STATE_SUCCESS,
  LoadConnectionStateAction,
  LoadConnectionStateFailedAction,
  LoadConnectionStateSuccessAction,
  SET_CONNECTION_STATE,
  SetConnectionStateAction,
} from './actionTypes';

export const loadConnectionState = (): LoadConnectionStateAction => ({
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

export const setConnectionState = (
  connectionState: boolean,
): SetConnectionStateAction => ({
  type: SET_CONNECTION_STATE,
  payload: connectionState,
});
