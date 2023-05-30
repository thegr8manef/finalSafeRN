export const SINUP = 'SINUP';
export const SINUP_FAILED = 'SINUP_FAILED';
export const SINUP_SUCCESS = 'SINUP_SUCCESS';

export interface SinupAction {
  type: typeof SINUP;
}
export interface SinupActionFailed {
  type: typeof SINUP_FAILED;
  payload: string;
}

export interface SinupActionSuccess {
  type: typeof SINUP_SUCCESS;
  payload: string;
}

export type SignupActionTypes =
  | SinupAction
  | SinupActionFailed
  | SinupActionSuccess;
