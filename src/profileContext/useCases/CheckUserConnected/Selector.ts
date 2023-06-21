import {AppState} from '../../../redux_configuration/appState';

export const setUserConnectedSelector = (appState: AppState) =>
  appState.profile.checkUserConnected.userConnected;

export const checkUserConnectedSelector = (appState: AppState): boolean =>
  appState.profile.checkUserConnected.userConnected;
