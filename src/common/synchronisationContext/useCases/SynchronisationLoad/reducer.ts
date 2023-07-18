import {LoadDataState} from '../../configuration/state';
import {
  LOAD_DATA,
  LOAD_DATA_FAILED,
  LOAD_DATA_SUCCESS,
  LoadDataActionTypes,
} from './actionTypes';
const initailState: LoadDataState = {
  loading: undefined,
  error: undefined,
};

export const reducerLoadData = (
  state = initailState,
  action: LoadDataActionTypes,
): LoadDataState => {
  switch (action.type) {
    case LOAD_DATA:
      return {loading: true, error: undefined};
    case LOAD_DATA_SUCCESS:
      return {loading: false, error: undefined};
    case LOAD_DATA_FAILED:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
