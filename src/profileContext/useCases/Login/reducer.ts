import {LoginState} from '../../configuration/state';
import {
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LoginActionTypes,
} from './actionTypes';

const initialState: LoginState = {
  loading: false,
  error: undefined,
  profile: undefined,
};

export const reducerLogin = (
  state = initialState,
  action: LoginActionTypes,
): LoginState => {
  switch (action.type) {
    case LOGIN:
      return {loading: true, error: undefined, profile: undefined};

    case LOGIN_SUCCESS:
      return {loading: false, error: undefined, profile: action.payload};
    case LOGIN_FAILED:
      return {loading: false, error: action.payload, profile: undefined};
    default:
      return state;
  }
};
