import { VisitSynchronisation } from "@contexts/synchronisationContext/domain/entity/VisitSynchronisation"

export const SEND_DATA = "SEND_DATA"
export const SEND_DATA_SUCCESS = "SEND_DATA_SUCCESS"
export const SEND_DATA_FAILED = "SEND_DATA_FAILED"

export interface SendDataAction {
    type : typeof SEND_DATA,
    payload : 
    {
        'accessToken': string,
        'lastUpdate': string,
        'visitSynchronisation' : VisitSynchronisation,
  
    }
}

export interface SendDataActionSuccess {
    type : typeof SEND_DATA_SUCCESS,
}

export interface SendDataActionFailed {
    type : typeof SEND_DATA_FAILED,
    payload : string
}

export type SendDataActionTypes = 
    SendDataAction 
    | SendDataActionSuccess
    | SendDataActionFailed