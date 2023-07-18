export const LOAD_CONNECTION_STATUS = 'LOAD_CONNECTION_STATUS';
export const LOAD_CONNECTION_STATUS_SUCCESS = 'LOAD_CONNECTION_STATUS_SUCCESS';
export const LOAD_CONNECTION_STATUS_FAILED = 'LOAD_CONNECTION_STATUS_FAILED';
export const SET_CONNECTION_STATUS = 'SET_CONNECTION_STATUS';

export interface LoadConnectionStatusAction {
  type: typeof LOAD_CONNECTION_STATUS;
}

export interface SetConnectionStatusAction {
  type: typeof SET_CONNECTION_STATUS;
  payload: boolean;
}
export interface LoadConnectionStatusSuccessAction {
  type: typeof LOAD_CONNECTION_STATUS_SUCCESS;
  payload: boolean;
}

export interface LoadConnectionStatusFailedAction {
  type: typeof LOAD_CONNECTION_STATUS_FAILED;
  payload: string;
}

export type LoadConnectionStatusActionTypes =
  | LoadConnectionStatusAction
  | LoadConnectionStatusSuccessAction
  | LoadConnectionStatusFailedAction
  | SetConnectionStatusAction;
