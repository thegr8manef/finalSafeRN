export interface ProfileState {
  login: LoginState;
}

export interface LoginState {
  loading: boolean;
  error: string | undefined;
  token: string | undefined;
}
