export interface ConnectionState {
  loadConnectionState: LoadConnectionState;
}

export interface LoadConnectionState {
  loading: boolean;
  error: string | undefined;
  state: boolean | undefined;
}
