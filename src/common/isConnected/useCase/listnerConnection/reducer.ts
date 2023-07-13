import {LoadConnectionState} from '../../configuration/state';
import {
  LOAD_CONNECTION_STATE,
  LOAD_CONNECTION_STATE_FAILED,
  LOAD_CONNECTION_STATE_SUCCESS,
  LoadConnectionStateActionTypes,
} from '../../useCase/listnerConnection/actionTypes';
const initialState: LoadConnectionState = {
  loading: false,
  error: undefined,
  state: undefined,
};

export const reducerLoadConnectionState = (
  state = initialState,
  action: LoadConnectionStateActionTypes,
): LoadConnectionState => {
  switch (action.type) {
    case LOAD_CONNECTION_STATE:
      return {loading: true, error: undefined, state: undefined};

    case LOAD_CONNECTION_STATE_SUCCESS:
      return {loading: false, error: undefined, state: action.payload};

    case LOAD_CONNECTION_STATE_FAILED:
      return {loading: false, error: action.payload, state: undefined};

    default:
      return state;
  }
};
