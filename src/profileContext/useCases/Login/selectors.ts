import {AppState} from '../../../redux_configuration/appState';

export const loginLoadingSelector = (appState: AppState): boolean =>
  appState.profile.login.loading;

export const loginErrorSelector = (appState: AppState): string | undefined =>
  appState.profile.login.error;

export const tokenSelector = (appState: AppState): string | undefined =>
  appState.profile.login.token;
