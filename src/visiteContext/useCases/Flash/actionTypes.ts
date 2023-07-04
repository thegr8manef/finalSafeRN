import {Flash} from '../../domain/entity/Flash';

export const SAVE_FLASH = 'SAVE_FLASH';

export const SAVE_FLASH_FAILED = 'SAVE_FLASH_FAILED';

export interface SaveFlashAction {
  type: typeof SAVE_FLASH;
  payload : Flash
}

export interface FlashActionFailed {
  type: typeof SAVE_FLASH_FAILED;
  payload: string;
}

export type FlashActionTypes =
  | SaveFlashAction
  | FlashActionFailed;
