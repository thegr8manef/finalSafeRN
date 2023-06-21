export const SET_USER_CONNECTED = 'SET_USER_CONNECTED';

export const CHECK_USER_CONNECTED = 'CHECK_USER_CONNECTED';

export interface SetUserConnected {
  type: typeof SET_USER_CONNECTED;
  payload: boolean;
}

export interface CheckUserConnected {
  type: typeof CHECK_USER_CONNECTED;
  payload: boolean | undefined;
}

export type UserInfoActionTypes = SetUserConnected | CheckUserConnected;
