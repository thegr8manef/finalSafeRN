import {AppState} from '../../../redux_configuration/appState';

export const SaveStatLoadingSelector = (appState: AppState): boolean =>
  appState.dashboard.saveStat.loading;

export const statErrorSelector = (appState: AppState): string | undefined =>
  appState.dashboard.saveStat.error;
