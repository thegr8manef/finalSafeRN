import { VisitFlash } from '@contexts/visiteContext/domain/entity/VisitFlash';
import {
  FlashActionFailed,
  FlashActionSuccess,
  SAVE_FLASH,
  SAVE_FLASH_FAILED,
  SAVE_FLASH_SUCCESS,
  SaveFlashAction,
} from './actionTypes';
import Remarque from '@contexts/visiteContext/domain/entity/Remarque';

export const SaveFlash = (data: Remarque): SaveFlashAction => ({
  type: SAVE_FLASH,
  payload: data,
});
export const SaveFlashFailed = (error: string): FlashActionFailed => ({
  type: SAVE_FLASH_FAILED,
  payload: error,
});
export const SaveFlashSuccess = (): FlashActionSuccess => ({
  type: SAVE_FLASH_SUCCESS,
});

