import Remarque from '@contexts/visiteContext/domain/entity/Remarque';
import {
    VisitActionFailed,
    VisitActionSuccess,
    SAVE_VISIT,
    SAVE_VISIT_FAILED,
    SAVE_VISIT_SUCCESS,
    SaveVisitAction,
} from './actionTypes';

export const SaveVisit = (data: Remarque): SaveVisitAction => ({
    type: SAVE_VISIT,
    payload: data,
});
export const SaveVisitFailed = (error: string): VisitActionFailed => ({
    type: SAVE_VISIT_FAILED,
    payload: error,
});
export const SaveVisitSuccess = (): VisitActionSuccess => ({
    type: SAVE_VISIT_SUCCESS,
});
