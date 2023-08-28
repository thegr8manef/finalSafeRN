import Remarque from "@contexts/visiteContext/domain/entity/Remarque";

export const SAVE_FLASH = 'SAVE_FLASH';
export const SAVE_FLASH_SUCCESS = 'SAVE_FLASH_SUCCESS';
export const SAVE_FLASH_FAILED = 'SAVE_FLASH_FAILED';


export interface SaveFlashAction {
  type: typeof SAVE_FLASH;
  payload: Remarque;
}

export interface FlashActionFailed {
  type: typeof SAVE_FLASH_FAILED;
  payload: string;
}

export interface FlashActionSuccess {
  type: typeof SAVE_FLASH_SUCCESS;
}

export type FlashActionTypes =
  | SaveFlashAction
  | FlashActionSuccess
  | FlashActionFailed;