import {
  LoadConnectionState,
  SetConnectionState,
} from '../../configuration/state';

import {
  SET_CONNECTION_STATE,
  SET_CONNECTION_STATE_FAILED,
  SET_CONNECTION_STATE_SUCCESS,
  SetConnectionStateActionTypes,
} from './actionTypes';
const initialState: SetConnectionState = {
  state: undefined,
};

export const reducerSetConnectionState = (
  state = initialState,
  action: SetConnectionStateActionTypes,
): SetConnectionState => {
  switch (action.type) {
    case SET_CONNECTION_STATE:
      return {state: action.payload};

    case SET_CONNECTION_STATE_SUCCESS:
      return {state: undefined};

    case SET_CONNECTION_STATE_FAILED:
      return {state: undefined};

    default:
      return state;
  }
};
