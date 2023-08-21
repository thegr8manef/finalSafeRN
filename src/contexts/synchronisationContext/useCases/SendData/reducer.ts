import { SendDataState } from "@contexts/synchronisationContext/configuration/state";
import {SEND_DATA, SEND_DATA_FAILED, SEND_DATA_SUCCESS, SendDataActionTypes} from "@contexts/synchronisationContext/useCases/SendData/actionTypes"
const initailState : SendDataState = {
    loading: false,
    error: undefined,
}

export const reducerSendData = (
    state = initailState,
    action: SendDataActionTypes,
) : SendDataState => {
    switch(action.type){
        case SEND_DATA: 
            return {loading : true, error : undefined};
        case SEND_DATA_SUCCESS: 
            return {loading : false, error : undefined};
        case SEND_DATA_FAILED: 
            return {loading : false, error : action.payload}
        default :
            return state;
    }
}