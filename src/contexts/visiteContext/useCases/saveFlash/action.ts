import { VisitFlash } from '@contexts/visiteContext/domain/entity/VisitFlash';
import {
  FlashActionFailed,
  FlashActionSuccess,
  SAVE_FLASH,
  SAVE_FLASH_FAILED,
  SAVE_FLASH_SUCCESS,
  SaveFlashAction,
} from './actionTypes';
import { Remarque } from '@common/adapters/secondaries/db/entity/Remarque';

export const SaveFlash = (data: VisitFlash): SaveFlashAction => ({
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

