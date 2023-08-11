import {AppState} from '../../../redux_configuration/appState';

export const signupLoadingSelector = (appState: AppState): boolean =>
  appState.profile.signup.loading;
export const signupErrorSelector = (appState: AppState): string | undefined =>
  appState.profile.signup.error;

export const tokenSelector = (appState: AppState): string | undefined =>
  appState.profile.signup.token;
