import {Profile} from '../../domain/entity/profile';
import {
  CHECK_USER_CONNECTED,
  CheckUserConnected,
  SET_USER_CONNECTED,
  SetUserConnected,
} from './actionTypes';

export const setUserConnected = (userConnected: boolean): SetUserConnected => ({
  type: SET_USER_CONNECTED,
  payload: userConnected,
});

export const checkUserConnected = (
  ifConnected: boolean | undefined,
): CheckUserConnected => ({
  type: CHECK_USER_CONNECTED,
  payload: ifConnected,
});
