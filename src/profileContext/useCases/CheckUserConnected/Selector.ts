import {AppState} from '../../../redux_configuration/appState';

export const checkUserConnectedSelector = (appState: AppState): boolean =>
  appState.profile.checkUserConnected.userConnected;

export const checkUserConnectedSuccessSelector = (
  appState: AppState,
): boolean => appState.profile.checkUserConnected.userConnected;
