import {SignUpState} from '../../configuration/state';
import {
  SignupActionTypes,
  SINUP,
  SINUP_FAILED,
  SINUP_SUCCESS,
} from './actionTypes';

const initialState: SignUpState = {
  loading: false,
  error: undefined,
  token: undefined,
};
export const reducerSignup = (
  state = initialState,
  action: SignupActionTypes,
): SignUpState => {
  switch (action.type) {
    case SINUP:
      return {loading: true, error: undefined, token: undefined};
    case SINUP_FAILED:
      return {loading: false, error: action.payload, token: undefined};
    case SINUP_SUCCESS:
      return {loading: false, error: undefined, token: action.payload};
    default:
      return state;
  }
};
