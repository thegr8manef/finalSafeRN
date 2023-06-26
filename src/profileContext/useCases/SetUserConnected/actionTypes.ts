import {Profile} from '../../domain/entity/profile';

export const SET_USER_CONNECTED = 'SET_USER_CONNECTED';

export const SET_USER_CONNECTED_ERROR = 'SET_USER_CONNECTED_ERROR';

export interface SetUserConnected {
  type: typeof SET_USER_CONNECTED;
  payload: Profile;
}

export type UserInfoActionTypes = SetUserConnected;
