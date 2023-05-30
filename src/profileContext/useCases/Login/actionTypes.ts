import { Profile } from "../../domain/entity/profile";

export const LOGIN = 'LOGIN';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const LOGIN_FAILED = 'LOGIN_FAILED';

export interface LoginAction {
  type: typeof LOGIN;
}

export interface LoginActionSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: Profile;
}

export interface LoginActionFailed {
  type: typeof LOGIN_FAILED;
  payload: string;
}

export type LoginActionTypes =
  | LoginAction
  | LoginActionSuccess
  | LoginActionFailed;
