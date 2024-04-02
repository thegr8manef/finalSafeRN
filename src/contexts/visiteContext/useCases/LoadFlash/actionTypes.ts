import Remarque from "@contexts/visiteContext/domain/entity/Remarque";
import { Visit } from "@contexts/visiteContext/domain/entity/Visit";
import { VisitFlash } from "@contexts/visiteContext/domain/entity/VisitFlash";

export const LOAD_FLASH = 'LOAD_FLASH';
export const LOAD_FLASH_SUCCESS = 'LOAD_FLASH_SUCCESS';
export const LOAD_FLASH_FAILED = 'LOAD_FLASH_FAILED';

export interface LoadFlashAction {
    type: typeof LOAD_FLASH;
}

export interface LoadFlashFailedAction {
    type: typeof LOAD_FLASH_FAILED;
    payload: string;
}

export interface LoadFlashSuccessAction {
    type: typeof LOAD_FLASH_SUCCESS;
    payload: VisitFlash[];
}

export type LoadFlashActionDbTypes =
    | LoadFlashAction
    | LoadFlashSuccessAction
    | LoadFlashFailedAction;
