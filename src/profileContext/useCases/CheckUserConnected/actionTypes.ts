export const CHECK_USER_CONNECTED = 'CHECK_USER_CONNECTED';

export interface CheckUserConnected {
  type: typeof CHECK_USER_CONNECTED;
  payload: boolean;
}

export type UserInfoActionTypes = CheckUserConnected;
