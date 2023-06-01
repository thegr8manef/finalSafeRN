import {
  FlashAction,
  FlashActionFailed,
  FlashActionSuccess,
  LOAD_FLASH,
  LOAD_FLASH_FAILED,
  LOAD_FLASH_SUCCESS,
} from './actionTypes';
import {Flash} from '../../domain/entity/Flash';

export const flash = (): FlashAction => ({
  type: LOAD_FLASH,
});
export const flashFailed = (error: string): FlashActionFailed => ({
  type: LOAD_FLASH_FAILED,
  payload: error,
});
export const flashSuccess = (flash: Flash): FlashActionSuccess => ({
  type: LOAD_FLASH_SUCCESS,
  payload: flash,
});
