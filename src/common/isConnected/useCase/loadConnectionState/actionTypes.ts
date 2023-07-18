export const LOAD_CONNECTION_STATE = 'LOAD_CONNECTION_STATE';
export const LOAD_CONNECTION_STATE_SUCCESS = 'LOAD_CONNECTION_STATE_SUCCESS';
export const LOAD_CONNECTION_STATE_FAILED = 'LOAD_CONNECTION_STATE_FAILED';
export const SET_CONNECTION_STATE = 'SET_CONNECTION_STATE';

export interface LoadConnectionStateAction {
  type: typeof LOAD_CONNECTION_STATE;
}

export interface SetConnectionStateAction {
  type: typeof SET_CONNECTION_STATE;
  payload: boolean;
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
  | LoadConnectionStateFailedAction
  | SetConnectionStateAction;
