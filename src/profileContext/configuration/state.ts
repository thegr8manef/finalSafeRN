import { Profile } from "../domain/entity/profile";
import { User } from "../domain/entity/user";

export interface ProfileState {
  login: LoginState;
}

export interface LoginState {
  loading: boolean;
  error: string | undefined;
  profile: Profile | undefined |User;
}

/**
 * to load profile details
 */
export interface ProfileDetailsStat {
  loadProfileDetails : LoadProfileState
}



export interface LoadProfileState {
  loading: boolean;
  error: string | undefined;
  user : User | undefined;
}