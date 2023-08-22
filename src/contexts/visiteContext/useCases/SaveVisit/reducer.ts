import { SaveVisitState } from '@contexts/visiteContext/configuration/state';
import {
    VisitActionTypes,
    SAVE_VISIT,
    SAVE_VISIT_FAILED,
    SAVE_VISIT_SUCCESS,
} from './actionTypes';

const initialState: SaveVisitState = {
    error: undefined,
    loading: false,
};

export const reducerSaveVisit = (
    state = initialState,
    action: VisitActionTypes,
): SaveVisitState => {
    switch (action.type) {
        case SAVE_VISIT:
            return { error: undefined, loading: true };

        case SAVE_VISIT_SUCCESS:
            return {
                loading: false,
                error: undefined,
            };

        case SAVE_VISIT_FAILED:
            return {
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};
