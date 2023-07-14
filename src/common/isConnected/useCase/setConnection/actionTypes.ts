export const SET_CONNECTION_STATE = 'SET_CONNECTION_STATE';
export const SET_CONNECTION_STATE_SUCCESS = 'SET_CONNECTION_STATE_SUCCESS';
export const SET_CONNECTION_STATE_FAILED = 'SET_CONNECTION_STATE_FAILED';

export interface SetConnectionStateAction {
  type: typeof SET_CONNECTION_STATE;
  payload: boolean;
}

export interface SetConnectionStateSuccessAction {
  type: typeof SET_CONNECTION_STATE_SUCCESS;
}

export interface SetConnectionStateFailedAction {
  type: typeof SET_CONNECTION_STATE_FAILED;
  payload: string;
}

export type SetConnectionStateActionTypes =
  | SetConnectionStateAction
  | SetConnectionStateSuccessAction
  | SetConnectionStateFailedAction;
