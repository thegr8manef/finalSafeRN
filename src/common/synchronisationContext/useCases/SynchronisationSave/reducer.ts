import {SaveDataState} from '../../configuration/state';
import {
  SAVE_DATA,
  SAVE_DATA_FAILED,
  SAVE_DATA_SUCCESS,
  SaveDataActionTypes,
} from './actionTypes';

const initailState: SaveDataState = {
  loading: false,
  error: undefined,
};

export const reducerSaveData = (
  state = initailState,
  action: SaveDataActionTypes,
): SaveDataState => {
  switch (action.type) {
    case SAVE_DATA:
      return {loading: true, error: undefined};
    case SAVE_DATA_SUCCESS:
      return {loading: false, error: undefined};
    case SAVE_DATA_FAILED:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
