import {
    VisitActionFailed,
    VisitActionSuccess,
    SAVE_VISIT,
    SAVE_VISIT_FAILED,
    SAVE_VISIT_SUCCESS,
    SaveVisitAction,
} from './actionTypes';
import { Visit } from '@contexts/visiteContext/domain/entity/Visit';

export const SaveVisit = (data: Visit): SaveVisitAction => ({
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
