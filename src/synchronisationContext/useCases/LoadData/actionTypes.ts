import {Chantier} from '../../../common/adapters/secondaries/db/entity/Chantier';

export const LOAD_DATA = 'LOAD_DATA';
export const LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS';
export const LOAD_DATA_FAILED = 'LOAD_DATA_FAILED';

export interface LoadData {
  type: typeof LOAD_DATA;
  payload: {
    accessToken: string;
    lastUpdate: string;
  };
}

export interface LoadDataSuccess {
  type: typeof LOAD_DATA_SUCCESS;
}

export interface LoadDataFailed {
  type: typeof LOAD_DATA_FAILED;
  payload: string;
}

export type LoadDataActionTypes = LoadData | LoadDataSuccess | LoadDataFailed;
