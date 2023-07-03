import {
  CHECK_USER_CONNECTED,
  CHECK_USER_CONNECTED_SUCCESS,
  CheckUserConnected,
  CheckUserConnectedSuccess,
} from './actionTypes';

export const checkUserConnected = (): CheckUserConnected => ({
  type: CHECK_USER_CONNECTED,
});

export const checkUserConnectedSuccess = (
  ifConnected: boolean,
): CheckUserConnectedSuccess => ({
  type: CHECK_USER_CONNECTED_SUCCESS,
  payload: ifConnected,
});
