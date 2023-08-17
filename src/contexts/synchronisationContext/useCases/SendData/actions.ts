import { VisitSynchronisation } from "@contexts/synchronisationContext/domain/entity/VisitSynchronisation";
import { SEND_DATA, SEND_DATA_FAILED, SEND_DATA_SUCCESS, SendDataAction, SendDataActionSuccess } from "./actionTypes";

export const sendData = (_accessToken: string,
                         _lastupdate:string,
                        _visitSynchronisation : VisitSynchronisation
     ) : SendDataAction => ({
    type : SEND_DATA,
    payload : 
    {
        'accessToken': _accessToken,
        'visitSynchronisation' : _visitSynchronisation,
        'lastUpdate': _lastupdate
    }
})

export const sendDataSucccess = () : SendDataActionSuccess => ({
    type : SEND_DATA_SUCCESS
})

export const sendDataFailed =(error : string) => ({
    type : SEND_DATA_FAILED,
    payload : error
})