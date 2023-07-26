import {Chantier} from '../../common/adapters/secondaries/db/entity/Chantier';

export interface SynchronisationState {
  loadData: LoadDataState;
}

export interface LoadDataState {
  loading: boolean;

  error: string | undefined;
}
