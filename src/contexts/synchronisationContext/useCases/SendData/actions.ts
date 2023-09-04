import { Visit } from "@contexts/visiteContext/domain/entity/Visit";
import { SEND_DATA, SEND_DATA_FAILED, SEND_DATA_SUCCESS, SendDataAction, SendDataActionSuccess } from "./actionTypes";

export const sendData = (_accessToken: string,
                         _lastupdate:string,
                        _visits : Visit[]
     ) : SendDataAction => ({
    type : SEND_DATA,
    payload : 
    {
        'accessToken': _accessToken,
        'visits' : _visits,
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