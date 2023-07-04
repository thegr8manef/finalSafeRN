import {Profile} from '../../domain/entity/profile';
import {
  SET_USER_CONNECTED,
  SET_USER_CONNECTED_ERROR,
  SET_USER_CONNECTED_SUCCESS,
  SetUserConnected,
  SetUserConnectedError,
  SetUserConnectedSuccess,
} from './actionTypes';

export const setUserConnected = (profile: Profile): SetUserConnected => ({
  type: SET_USER_CONNECTED,
  payload: profile,
});

export const setUserConnectedSuccess = (): SetUserConnectedSuccess => ({
  type: SET_USER_CONNECTED_SUCCESS,
});

export const setUserConnectedError = (
  error: string,
): SetUserConnectedError => ({
  type: SET_USER_CONNECTED_ERROR,
  payload: error,
});
