import {Chantier} from '../../../adapters/secondaries/db/entity/Chantier';
import {
  SAVE_DATA,
  SAVE_DATA_FAILED,
  SAVE_DATA_SUCCESS,
  SaveData,
  SaveDataFailed,
  SaveDataSuccess,
} from './actionTypes';

export const saveData = (chantier: Chantier[]): SaveData => ({
  type: SAVE_DATA,
  payload: chantier,
});

export const saveDataSuccess = (): SaveDataSuccess => ({
  type: SAVE_DATA_SUCCESS,
});

export const saveDataFailed = (error: string): SaveDataFailed => ({
  type: SAVE_DATA_FAILED,
  payload: error,
});
