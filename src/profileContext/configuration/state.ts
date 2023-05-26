import { Profile } from "../domain/entity/profile";

export interface ProfileState {
  login: LoginState;
}

export interface LoginState {
  loading: boolean;
  error: string | undefined;
  profile: Profile | undefined;
}
