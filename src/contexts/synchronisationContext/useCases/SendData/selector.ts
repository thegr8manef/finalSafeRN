import {AppState} from '@redux/appState';

export const loadingSendSelector = (appState: AppState): boolean =>
  appState.synchronisation.sendData.loading;

export const sendDataErrorSelector = (appState: AppState): string | undefined =>
  appState.synchronisation.sendData.error;
