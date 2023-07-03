import {Profile} from '../domain/entity/profile';
import {User} from '../domain/entity/user';

export interface ProfileState {
  login: LoginState;
  loadProfileDetails: LoadProfileState;
  checkUserConnected: CheckUserConnectedState;
  setUserConnected: SetUserConnectedState;
  loadProfileDetailsDb: LoadProfileDbState;
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

export interface LoadProfileDbState {
  loading: boolean;
  error: string | undefined;
  profile: Profile | undefined;
}

export interface CheckUserConnectedState {
  userConnected: boolean;
}

export interface SetUserConnectedState {
  userConnected: boolean;
  profile: Profile | undefined;
  error: string | undefined;
}
