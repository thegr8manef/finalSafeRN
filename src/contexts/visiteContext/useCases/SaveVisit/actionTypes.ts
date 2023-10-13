import Remarque from "@contexts/visiteContext/domain/entity/Remarque";
import { Visit } from "@contexts/visiteContext/domain/entity/Visit";

export const SAVE_VISIT = 'SAVE_VISIT';
export const SAVE_VISIT_SUCCESS = 'SAVE_VISIT_SUCCESS';
export const SAVE_VISIT_FAILED = 'SAVE_VISIT_FAILED';

export interface SaveVisitAction {
    type: typeof SAVE_VISIT;
    payload: Visit;
}

export interface VisitActionFailed {
    type: typeof SAVE_VISIT_FAILED;
    payload: string;
}

export interface VisitActionSuccess {
    type: typeof SAVE_VISIT_SUCCESS;
}

export type VisitActionTypes =
    | SaveVisitAction
    | VisitActionSuccess
    | VisitActionFailed;
