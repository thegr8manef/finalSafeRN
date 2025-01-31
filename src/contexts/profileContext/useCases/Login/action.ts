import {Profile} from '../../domain/entity/profile';
import {
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LoginAction,
  LoginActionFailed,
  LoginActionSuccess,
} from './actionTypes';

export const login = (): LoginAction => ({
  type: LOGIN,
});

export const loginFailed = (error: string): LoginActionFailed => ({
  type: LOGIN_FAILED,
  payload: error,
});

export const loginSuccess = (profile: Profile): LoginActionSuccess => ({
  type: LOGIN_SUCCESS,
  payload: profile,
});
