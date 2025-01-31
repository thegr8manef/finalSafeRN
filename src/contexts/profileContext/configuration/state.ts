import {Profile} from '../domain/entity/profile';
import {User} from '../domain/entity/user';

export interface ProfileState {
  login: LoginState;
  loadProfileDetails: LoadProfileState;
  setUserConnected: SetUserConnectedState;
  loadLocalProfile: LoadLocalProfileState;
  updateLocalProfile: UpdateLocalProfileState;
}

export interface LoginState {
  loading: boolean;
  error: string | undefined;
  profile: Profile | undefined;
}

/**
 * to load profile details
 */
// export interface ProfileDetailsStat {
//   loadProfileDetails : LoadProfileState
// }

export interface LoadProfileState {
  loading: boolean;
  error: string | undefined;
  user: User | undefined;
}

export interface LoadLocalProfileState {
  loading: boolean;
  error: string | undefined;
  profile: Profile | undefined;
}

export interface SetUserConnectedState {
  userConnected: boolean;
  profile: Profile | undefined;
  error: string | undefined;
}

export interface UpdateLocalProfileState {
  loading: boolean;
  error: string | undefined;
}
