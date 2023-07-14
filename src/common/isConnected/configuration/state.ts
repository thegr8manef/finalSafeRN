export interface ConnectionState {
  loadConnectionState: LoadConnectionState;
  setConnectionState: SetConnectionState;
}

export interface LoadConnectionState {
  loading: boolean;
  error: string | undefined;
  state: boolean | undefined;
}

export interface SetConnectionState {
  state: boolean | undefined;
}
