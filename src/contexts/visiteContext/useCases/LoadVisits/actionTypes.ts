import Remarque from "@contexts/visiteContext/domain/entity/Remarque";
import { Visit } from "@contexts/visiteContext/domain/entity/Visit";
import { VisitFlash } from "@contexts/visiteContext/domain/entity/VisitFlash";

export const LOAD_VISITS = 'LOAD_VISITS';
export const LOAD_VISITS_SUCCESS = 'LOAD_VISITS_SUCCESS';
export const LOAD_VISITS_FAILED = 'LOAD_VISITS_FAILED';

export interface LoadVisitsAction {
    type: typeof LOAD_VISITS;
}

export interface LoadVisitsFailedAction {
    type: typeof LOAD_VISITS_FAILED;
    payload: string;
}

export interface LoadVisitsSuccessAction {
    type: typeof LOAD_VISITS_SUCCESS;
    payload: Visit[] | VisitFlash[];
}

export type LoadVisitsActionDbTypes =
    | LoadVisitsAction
    | LoadVisitsSuccessAction
    | LoadVisitsFailedAction;
