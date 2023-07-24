import {AppState} from '../../../../redux_configuration/appState';

export const loadingSaveSelector = (appState: AppState): boolean =>
  appState.synchronisation.saveData.loading;

export const saveDataErrorSelector = (appState: AppState): string | undefined =>
  appState.synchronisation.loadData.error;
