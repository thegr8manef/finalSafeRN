export const LOAD_DATA = 'LOAD_DATA';
export const LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS';
export const LOAD_DATA_FAILED = 'LOAD_DATA_FAILED';

export interface LoadDataAction {
  type: typeof LOAD_DATA;
  payload: {
    "accessToken" : string,
    "lastUpdate"  : string
  };
}

export interface LoadDataSuccessAction {
  type: typeof LOAD_DATA_SUCCESS;
}

export interface LoadDataFailedAction {
  type: typeof LOAD_DATA_FAILED;
  payload: string;
}

export type LoadDataActionTypes =
  | LoadDataAction
  | LoadDataSuccessAction
  | LoadDataFailedAction;
