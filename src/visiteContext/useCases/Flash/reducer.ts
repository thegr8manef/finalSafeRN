import {FlashState} from '../../configuration/state';
import {
  FlashActionTypes,
  SAVE_FLASH,
  SAVE_FLASH_FAILED,
} from './actionTypes';

let initialState: FlashState;
initialState = {
  errorVisits: undefined,
  flash: undefined,
};

export const reducerVisitFlash = (
  state = initialState,
  action: FlashActionTypes,
): FlashState => {
  switch (action.type) {
    case SAVE_FLASH:
      return {
        errorVisits: undefined,
        flash: action.payload
      };
    case SAVE_FLASH_FAILED:
      return {
        errorVisits: action.payload,
        flash: undefined,
      };
    default:
      return state;
  }
};
