import {
  SINUP,
  SINUP_FAILED,
  SINUP_SUCCESS,
  SinupAction,
  SinupActionFailed,
  SinupActionSuccess,
} from './actionTypes';

export const signup = (): SinupAction => ({
  type: SINUP,
});
export const signupFailed = (error: string): SinupActionFailed => ({
  type: SINUP_FAILED,
  payload: error,
});

export const signupSuccess = (token: string): SinupActionSuccess => ({
  type: SINUP_SUCCESS,
  payload: token,
});
