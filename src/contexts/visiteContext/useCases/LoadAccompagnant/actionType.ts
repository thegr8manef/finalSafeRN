import { Accompagnant } from "@contexts/visiteContext/domain/entity/Accompagnant";

export const LOAD_ACCOMPAGNANTS = 'LOAD_ACCOMPAGNANTS';
export const LOAD_ACCOMPAGNANTS_SUCCESS = 'LOAD_ACCOMPAGNANTS_SUCCESS';
export const LOAD_ACCOMPAGNANTS_FAILED = 'LOAD_ACCOMPAGNANTS_FAILED';

export interface LoadAccompagnantsAction {
    type: typeof LOAD_ACCOMPAGNANTS;
}

export interface LoadAccompagnantsFailedAction {
    type: typeof LOAD_ACCOMPAGNANTS_FAILED;
    payload: string;
}

export interface LoadAccompagnantsSuccessAction {
    type: typeof LOAD_ACCOMPAGNANTS_SUCCESS;
    payload: Accompagnant[];
}

export type LoadAccompagnantsActionTypes =
    | LoadAccompagnantsAction
    | LoadAccompagnantsSuccessAction
    | LoadAccompagnantsFailedAction;
