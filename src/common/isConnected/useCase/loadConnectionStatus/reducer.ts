import {LoadConnectionStatus} from '../../configuration/state';
import {
  LOAD_CONNECTION_STATUS,
  LOAD_CONNECTION_STATUS_FAILED,
  LOAD_CONNECTION_STATUS_SUCCESS,
  LoadConnectionStatusActionTypes,
  SET_CONNECTION_STATUS,
} from './actionTypes';
const initialState: LoadConnectionStatus = {
  loading: false,
  error: undefined,
  status: undefined,
};

export const reducerLoadConnectionStatus = (
  state = initialState,
  action: LoadConnectionStatusActionTypes,
): LoadConnectionStatus => {
  switch (action.type) {
    case LOAD_CONNECTION_STATUS:
      return {loading: true, error: undefined, status: undefined};

    case LOAD_CONNECTION_STATUS_SUCCESS:
      return {loading: false, error: undefined, status: action.payload};

    case LOAD_CONNECTION_STATUS_FAILED:
      return {loading: false, error: action.payload, status: undefined};
    case SET_CONNECTION_STATUS:
      return {loading: false, error: undefined, status: action.payload};

    default:
      return state;
  }
};
