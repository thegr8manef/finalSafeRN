import {Chantier} from '../../../adapters/secondaries/db/entity/Chantier';

export const SAVE_DATA = 'SAVE_DATA';
export const SAVE_DATA_SUCCESS = 'SAVE_DATA_SUCCESS';
export const SAVE_DATA_FAILED = 'SAVE_DATA_FAILED';

export interface SaveData {
  type: typeof SAVE_DATA;
  payload: Chantier[];
}

export interface SaveDataSuccess {
  type: typeof SAVE_DATA_SUCCESS;
}

export interface SaveDataFailed {
  type: typeof SAVE_DATA_FAILED;
  payload: string;
}

export type SaveDataActionTypes = SaveData | SaveDataSuccess | SaveDataFailed;
