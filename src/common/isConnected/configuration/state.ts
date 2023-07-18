export interface ConnectionStatus {
  loadConnectionStatus: LoadConnectionStatus;
}

export interface LoadConnectionStatus {
  loading: boolean;
  error: string | undefined;
  status: boolean | undefined;
}
