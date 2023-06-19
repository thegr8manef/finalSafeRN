import { Profile } from "../../domain/entity/profile";
import { GET_USER_INFO, GetUserInfo, SET_USER_INFO, SetUserInfo } from "./actionTypes";

export const setUserInfo = (profile : Profile) : SetUserInfo=>({
    type : SET_USER_INFO,
    payload: profile
    
})

export const getUserInfo = (profile : Profile) : GetUserInfo=>({
    type : GET_USER_INFO,
    payload : profile
  

})