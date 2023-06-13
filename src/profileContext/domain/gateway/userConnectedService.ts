import { Profile } from "../entity/profile";

export interface UserConnectedService {
    setUserInfo(profile : Profile): Profile | undefined
    getUserInfo() : Profile
}