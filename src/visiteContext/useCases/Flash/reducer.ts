import {FlashState} from '../../configuration/state';
import {
  FlashActionTypes,
  LOAD_FLASH,
  LOAD_FLASH_FAILED,
  LOAD_FLASH_SUCCESS,
} from './actionTypes';

let initialState: FlashState;
initialState = {
  loadingVisits: false,
  errorVisits: undefined,
  flash: undefined,
};

export const reducerVisitFlash = (
  state = initialState,
  action: FlashActionTypes,
): FlashState => {
  switch (action.type) {
    case LOAD_FLASH:
      return {loadingVisits: true, errorVisits: undefined, flash: undefined};

    case LOAD_FLASH_SUCCESS:
      return {
        loadingVisits: false,
        errorVisits: undefined,
        flash: action.payload,
      };
    case LOAD_FLASH_FAILED:
      return {
        loadingVisits: false,
        errorVisits: action.payload,
        flash: undefined,
      };
    default:
      return state;
  }
};
