import { result } from "../domain/entity/result";

export interface ProfileState {
  login: LoginState;
}

export interface LoginState {
  loading: boolean;
  error: string | undefined;
  result: result | undefined;
}
