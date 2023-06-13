import { Profile } from "../../domain/entity/profile";

export const SET_USER_INFO = "SET_USER_INFO"

export const GET_USER_INFO = "GET_USER_INFO"


export interface SetUserInfo{
    type : typeof SET_USER_INFO;
    payload : Profile
}

export interface GetUserInfo{
    type : typeof GET_USER_INFO;
    payload : Profile
}


export type UserInfoActionTypes = 
        | SetUserInfo
        | GetUserInfo;
