import { VisitFlash } from '@contexts/visiteContext/domain/entity/VisitFlash';
import { LoadFlashAction, LOAD_FLASH, LoadFlashFailedAction, LOAD_FLASH_FAILED, LoadFlashSuccessAction, LOAD_FLASH_SUCCESS } from './actionTypes';

export const LoadFlash = (): LoadFlashAction => {
  return {
    type: LOAD_FLASH
  };
};
export const LoadFlashFailed = (
  error: string,
): LoadFlashFailedAction => ({
  type: LOAD_FLASH_FAILED,
  payload: error,
});

export const LoadFlashSuccess = (
  flash: VisitFlash[],
): LoadFlashSuccessAction => ({
  type: LOAD_FLASH_SUCCESS,
  payload: flash,
});
