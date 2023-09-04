import { Accompagnant } from "@contexts/visiteContext/domain/entity/Accompagnant";

export const LOAD_ACCOMPAGNANT = 'LOAD_ACCOMPAGNANT';
export const LOAD_ACCOMPAGNANT_SUCCESS = 'LOAD_ACCOMPAGNANT_SUCCESS';
export const LOAD_ACCOMPAGNANT_FAILED = 'LOAD_ACCOMPAGNANT_FAILED';

export interface LoadAccompagnantAction {
    type: typeof LOAD_ACCOMPAGNANT;
}

export interface LoadAccompagnantFailedAction {
    type: typeof LOAD_ACCOMPAGNANT_FAILED;
    payload: string;
}

export interface LoadAccompagnantSuccessAction {
    type: typeof LOAD_ACCOMPAGNANT_SUCCESS;
    payload: Accompagnant[];
}

export type LoadAccompagnantActionDbTypes =
    | LoadAccompagnantAction
    | LoadAccompagnantSuccessAction
    | LoadAccompagnantFailedAction;
