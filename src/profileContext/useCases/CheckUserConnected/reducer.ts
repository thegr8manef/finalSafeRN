import { CheckUserConnectedState } from "../../configuration/state";
import { Profile } from "../../domain/entity/profile";
import { GET_USER_INFO, SET_USER_INFO, UserInfoActionTypes } from "./actionTypes";

const initialState : CheckUserConnectedState = {
    profile : undefined
}

export const reducerCheckUser  = (
    state = initialState,
    action: UserInfoActionTypes
): CheckUserConnectedState => {
    switch(action.type) {
        case SET_USER_INFO: {
            return {profile : undefined}
        }
        case GET_USER_INFO: {
            return {profile : action.payload}
        }
        default: 
           return state;
    }
}