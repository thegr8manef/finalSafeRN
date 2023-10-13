import { LOAD_ACCOMPAGNANTS, LOAD_ACCOMPAGNANTS_FAILED, LOAD_ACCOMPAGNANTS_SUCCESS, LoadAccompagnantsAction, LoadAccompagnantsFailedAction, LoadAccompagnantsSuccessAction } from './actionType';
import { Accompagnant } from '@contexts/visiteContext/domain/entity/Accompagnant';


export const LoadAccompagnants = (): LoadAccompagnantsAction => ({
        type: LOAD_ACCOMPAGNANTS
});
export const LoadAccompagnantsFailed = (
    error: string,
): LoadAccompagnantsFailedAction => ({
    type: LOAD_ACCOMPAGNANTS_FAILED,
    payload: error,
});

export const LoadAccompagnantsSuccess = (
    Accompagnant: Accompagnant[],
): LoadAccompagnantsSuccessAction => ({
    type: LOAD_ACCOMPAGNANTS_SUCCESS,
    payload: Accompagnant,
});
