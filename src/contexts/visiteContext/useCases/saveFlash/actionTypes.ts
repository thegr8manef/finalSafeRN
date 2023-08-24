import { VisitFlash } from "@contexts/visiteContext/domain/entity/VisitFlash";

export const SAVE_FLASH = 'SAVE_FLASH';
export const SAVE_FLASH_SUCCESS = 'SAVE_FLASH_SUCCESS';
export const SAVE_FLASH_FAILED = 'SAVE_FLASH_FAILED';


export interface SaveFlashAction {
  type: typeof SAVE_FLASH;
  payload: VisitFlash;
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