export interface SynchronisationState {
  loadData: LoadDataState;
  sendData: SendDataState
}

export interface LoadDataState {
  loading: boolean;
  error: string | undefined;
}

export interface SendDataState {
  loading: boolean;
  error: string | undefined;
}
