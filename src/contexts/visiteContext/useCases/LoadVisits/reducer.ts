import { LoadVisitsState } from '../../configuration/state';
import { LOAD_VISITS, LOAD_VISITS_FAILED, LOAD_VISITS_SUCCESS, LoadVisitsActionDbTypes } from './actionTypes';

const initialState: LoadVisitsState = {
    loading: false,
    error: undefined,
    visits: undefined,
};

export const reducerLoadVisits= (
    state = initialState,
    action: LoadVisitsActionDbTypes,
): LoadVisitsState => {
    switch (action.type) {
        case LOAD_VISITS:
            return { loading: true, error: undefined, visits: undefined };

        case LOAD_VISITS_SUCCESS:
            return { loading: false, error: undefined, visits: action.payload };

        case LOAD_VISITS_FAILED:
            return { loading: false, error: action.payload, visits: undefined };

        default:
            return state;
    }
};
