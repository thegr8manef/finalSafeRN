import {
  FlashActionFailed,
  FlashActionSuccess,
  SAVE_FLASH,
  SAVE_FLASH_FAILED,
  SAVE_FLASH_SUCCESS,
  SaveFlashAction,
} from './actionTypes';
import {Flash} from '../../domain/entity/Flash';

export const SaveFlash = (data: Flash): SaveFlashAction => ({
  type: SAVE_FLASH,
  payload: data,
});
export const SaveFlashFailed = (error: string): FlashActionFailed => ({
  type: SAVE_FLASH_FAILED,
  payload: error,
});
export const SaveFlashSuccess = (flash: Flash): FlashActionSuccess => ({
  type: SAVE_FLASH_SUCCESS,
  payload: flash,
});
