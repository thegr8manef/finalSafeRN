import { Remarque } from "@common/adapters/secondaries/db/entity/Remarque";

export const SAVE_VISIT = 'SAVE_VISIT';
export const SAVE_VISIT_SUCCESS = 'SAVE_VISIT_SUCCESS';
export const SAVE_VISIT_FAILED = 'SAVE_VISIT_FAILED';

export interface SaveVisitAction {
    type: typeof SAVE_VISIT;
    payload: Remarque;
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
