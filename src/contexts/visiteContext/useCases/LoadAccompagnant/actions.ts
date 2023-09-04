import { Visit } from '@contexts/visiteContext/domain/entity/Visit';
import { LOAD_ACCOMPAGNANT, LOAD_ACCOMPAGNANT_FAILED, LOAD_ACCOMPAGNANT_SUCCESS, LoadAccompagnantAction, LoadAccompagnantFailedAction, LoadAccompagnantSuccessAction } from './actionType';


export const LoadAccompagnant = (): LoadAccompagnantAction => {
    return {
        type: LOAD_ACCOMPAGNANT
    };
};
export const LoadAccompagnantFailed = (
    error: string,
): LoadAccompagnantFailedAction => ({
    type: LOAD_ACCOMPAGNANT_FAILED,
    payload: error,
});

export const LoadAccompagnantSuccess = (
    Accompagnant: Visit[],
): LoadAccompagnantSuccessAction => ({
    type: LOAD_ACCOMPAGNANT_SUCCESS,
    payload: Accompagnant,
});
