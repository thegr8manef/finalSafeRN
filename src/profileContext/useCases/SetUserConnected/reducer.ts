import {SetUserConnectedState} from '../../configuration/state';
import {SET_USER_CONNECTED, UserInfoActionTypes} from './actionTypes';

const initialState: SetUserConnectedState = {
  userConnected: false,
  profile: undefined,
};

export const reducerSetUserConnected = (
  state = initialState,
  action: UserInfoActionTypes,
): SetUserConnectedState => {
  switch (action.type) {
    case SET_USER_CONNECTED: {
      return {userConnected: true, profile: action.payload};
    }

    default:
      return state;
  }
};
