import {Chantier} from '../../adapters/secondaries/db/entity/Chantier';

export interface SynchronisationState {
  loadData: LoadDataState;
  saveData: SaveDataState;
}

export interface LoadDataState {
  loading: boolean;

  error: string | undefined;
}

export interface SaveDataState {
  loading: boolean;
  error: string | undefined;
}
