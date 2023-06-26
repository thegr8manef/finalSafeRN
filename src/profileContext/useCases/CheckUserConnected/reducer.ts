import {CheckUserConnectedState} from '../../configuration/state';
import {CHECK_USER_CONNECTED, UserInfoActionTypes} from './actionTypes';

const initialState: CheckUserConnectedState = {
  userConnected: false,
};

export const reducerCheckUser = (
  state = initialState,
  action: UserInfoActionTypes,
): CheckUserConnectedState => {
  switch (action.type) {
    case CHECK_USER_CONNECTED: {
      return {userConnected: action.payload};
    }
    default:
      return state;
  }
};
