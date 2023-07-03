import {Profile} from '../../domain/entity/profile';

export const SET_USER_CONNECTED = 'SET_USER_CONNECTED';

export const SET_USER_CONNECTED_SUCCESS = 'SET_USER_CONNECTED_SUCCESS';

export const SET_USER_CONNECTED_ERROR = 'SET_USER_CONNECTED_ERROR';

export interface SetUserConnected {
  type: typeof SET_USER_CONNECTED;
  payload: Profile;
}

export interface SetUserConnectedSuccess {
  type: typeof SET_USER_CONNECTED_SUCCESS;
  payload: boolean;
}

export interface SetUserConnectedError {
  type: typeof SET_USER_CONNECTED_ERROR;
  payload: string;
}

export type UserInfoActionTypes =
  | SetUserConnected
  | SetUserConnectedSuccess
  | SetUserConnectedError;
