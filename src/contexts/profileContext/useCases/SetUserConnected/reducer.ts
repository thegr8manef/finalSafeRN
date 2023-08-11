import {SetUserConnectedState} from '../../configuration/state';
import {
  SET_USER_CONNECTED,
  SET_USER_CONNECTED_ERROR,
  SET_USER_CONNECTED_SUCCESS,
  UserInfoActionTypes,
} from './actionTypes';

const initialState: SetUserConnectedState = {
  userConnected: false,
  profile: undefined,
  error: undefined,
};

export const reducerSetUserConnected = (
  state = initialState,
  action: UserInfoActionTypes,
): SetUserConnectedState => {
  switch (action.type) {
    case SET_USER_CONNECTED: {
      return {userConnected: true, profile: action.payload, error: undefined};
    }
    case SET_USER_CONNECTED_SUCCESS: {
      return {userConnected: true, profile: undefined, error: undefined};
    }

    case SET_USER_CONNECTED_ERROR: {
      return {userConnected: false, profile: undefined, error: action.payload};
    }
    default:
      return state;
  }
};
