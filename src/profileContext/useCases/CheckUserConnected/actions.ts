import {CHECK_USER_CONNECTED, CheckUserConnected} from './actionTypes';

export const checkUserConnected = (
  ifConnected: boolean,
): CheckUserConnected => ({
  type: CHECK_USER_CONNECTED,
  payload: ifConnected,
});
