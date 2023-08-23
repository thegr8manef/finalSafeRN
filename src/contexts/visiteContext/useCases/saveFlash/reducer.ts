import { SaveFlashState } from '../../configuration/state';
import {
  FlashActionTypes,
  SAVE_FLASH,
  SAVE_FLASH_FAILED,
  SAVE_FLASH_SUCCESS
} from './actionTypes';

const initialState: SaveFlashState = {
  error: undefined,
  loading: false,
};

export const reducerVisitFlash = (
  state = initialState,
  action: FlashActionTypes,
): SaveFlashState => {
  switch (action.type) {
    case SAVE_FLASH:
      return { error: undefined, loading: true };

    case SAVE_FLASH_SUCCESS:
      return {
        loading: false,
        error: undefined,
      };

    case SAVE_FLASH_FAILED:
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
