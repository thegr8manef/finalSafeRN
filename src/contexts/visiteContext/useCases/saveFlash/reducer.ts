import { SaveFlashState } from '../../configuration/state';
import {
  FlashActionTypes,
  SAVE_FLASH,
  SAVE_FLASH_FAILED,
  REMOVE_FLASH_REMARK,
  SAVE_FLASH_SUCCESS
} from './actionTypes';

const initialState: SaveFlashState = {
  error: undefined,
  loading: false,
  createdRemark: undefined,
};

export const reducerVisitFlash = (
  state = initialState,
  action: FlashActionTypes,
): SaveFlashState => {
  switch (action.type) {
    case SAVE_FLASH:
      return { error: undefined, loading: true, createdRemark: undefined };

    case SAVE_FLASH_SUCCESS:
      return {
        loading: false,
        error: undefined,
        createdRemark: action.payload
      };

    case SAVE_FLASH_FAILED:
      return {
        error: action.payload,
        loading: false,
        createdRemark: undefined
      };
    case REMOVE_FLASH_REMARK:
      return {
        error: undefined,
        loading: false,
        createdRemark: undefined
      };
    default:
      return state;
  }
};
