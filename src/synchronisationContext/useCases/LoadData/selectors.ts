import {AppState} from '../../../redux_configuration/appState';

export const loadingDataSelector = (appState: AppState): boolean =>
  appState.synchronisation.loadData.loading;

export const loadDataErrorSelector = (appState: AppState): string | undefined =>
  appState.synchronisation.loadData.error;
