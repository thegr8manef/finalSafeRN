export const LOAD_CONNECTION_STATE = 'LOAD_CONNECTION_STATE';
export const LOAD_CONNECTION_STATE_SUCCESS = 'LOAD_CONNECTION_STATE_SUCCESS';
export const LOAD_CONNECTION_STATE_FAILED = 'LOAD_CONNECTION_STATE_FAILED';

export interface LoadConnectionStateAction {
  type: typeof LOAD_CONNECTION_STATE;
}

export interface LoadConnectionStateSuccessAction {
  type: typeof LOAD_CONNECTION_STATE_SUCCESS;
  payload: boolean;
}

export interface LoadConnectionStateFailedAction {
  type: typeof LOAD_CONNECTION_STATE_FAILED;
  payload: string;
}

export type LoadConnectionStateActionTypes =
  | LoadConnectionStateAction
  | LoadConnectionStateSuccessAction
  | LoadConnectionStateFailedAction;
