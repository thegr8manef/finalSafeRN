export const CHECK_USER_CONNECTED = 'CHECK_USER_CONNECTED';
export const CHECK_USER_CONNECTED_SUCCESS = 'CHECK_USER_CONNECTED_SUCCESS';

export interface CheckUserConnected {
  type: typeof CHECK_USER_CONNECTED;
}

export interface CheckUserConnectedSuccess {
  type: typeof CHECK_USER_CONNECTED_SUCCESS;
  payload: boolean;
}

export type UserInfoActionTypes =
  | CheckUserConnected
  | CheckUserConnectedSuccess;
