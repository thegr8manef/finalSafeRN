export interface SynchronisationState {
  loadData: LoadDataState;
}

export interface LoadDataState {
  loading: boolean;
  error: string | undefined;
}
