import {
  FlashActionFailed,
  SAVE_FLASH,
  SAVE_FLASH_FAILED,
  SaveFlashAction,
} from './actionTypes';
import {Flash} from '../../domain/entity/Flash';

export const SaveFlash = (data :Flash): SaveFlashAction => ({
  type: SAVE_FLASH,
  payload : data
});
export const flashFailed = (error: string): FlashActionFailed => ({
  type: SAVE_FLASH_FAILED,
  payload: error,
});
