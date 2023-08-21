import { SEND_DATA, SEND_DATA_FAILED, SEND_DATA_SUCCESS, SendDataAction, SendDataActionSuccess } from "./actionTypes";
import { Synchronisation } from "@contexts/synchronisationContext/domain/entity/Synchronisation";

export const sendData = (_accessToken: string,
                         _lastupdate:string,
                        _synchronisation : Synchronisation
     ) : SendDataAction => ({
    type : SEND_DATA,
    payload : 
    {
        'accessToken': _accessToken,
        'synchronisation' : _synchronisation,
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