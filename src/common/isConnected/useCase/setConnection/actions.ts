import {
  SetConnectionStateAction,
  SET_CONNECTION_STATE,
  SetConnectionStateSuccessAction,
  SET_CONNECTION_STATE_SUCCESS,
  SetConnectionStateFailedAction,
  SET_CONNECTION_STATE_FAILED,
} from './actionTypes';

export const setConnectionState = (
  isConnected: boolean,
): SetConnectionStateAction => ({
  type: SET_CONNECTION_STATE,
  payload: isConnected,
});

export const setConnectionStatSuccess =
  (): SetConnectionStateSuccessAction => ({
    type: SET_CONNECTION_STATE_SUCCESS,
  });

export const setConnectionStatFailed = (
  error: string,
): SetConnectionStateFailedAction => ({
  type: SET_CONNECTION_STATE_FAILED,
  payload: error,
});
