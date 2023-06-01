import {Flash} from '../../domain/entity/Flash';

export const LOAD_FLASH = 'LOAD_FLASH';

export const LOAD_FLASH_SUCCESS = 'LOAD_FLASH_SUCCESS';

export const LOAD_FLASH_FAILED = 'LOAD_FLASH_FAILED';

export interface FlashAction {
  type: typeof LOAD_FLASH;
}

export interface FlashActionSuccess {
  type: typeof LOAD_FLASH_SUCCESS;
  payload: Flash;
}

export interface FlashActionFailed {
  type: typeof LOAD_FLASH_FAILED;
  payload: string;
}

export type FlashActionTypes =
  | FlashAction
  | FlashActionSuccess
  | FlashActionFailed;
