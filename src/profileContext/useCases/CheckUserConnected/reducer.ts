import {CheckUserConnectedState} from '../../configuration/state';
import {
  CHECK_USER_CONNECTED,
  CHECK_USER_CONNECTED_SUCCESS,
  UserInfoActionTypes,
} from './actionTypes';

const initialState: CheckUserConnectedState = {
  userConnected: undefined,
};

export const reducerCheckUser = (
  state = initialState,
  action: UserInfoActionTypes,
): CheckUserConnectedState => {
  switch (action.type) {
    case CHECK_USER_CONNECTED: {
      return {userConnected: undefined};
    }
    case CHECK_USER_CONNECTED_SUCCESS: {
      return {
        userConnected: action.payload,
      };
    }
    default:
      return state;
  }
};
