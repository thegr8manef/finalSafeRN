import {AppState} from '../../../redux_configuration/appState';

export const saveFashErrorSelector = (appState: AppState): string | undefined =>
  appState.visits.saveFlash.error;

export const saveFlashLoadingSelector = (appState: AppState): boolean =>
  appState.visits.saveFlash.loading;
