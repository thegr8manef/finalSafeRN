import {AppState} from '../../../redux_configuration/appState';

export const checkUserConnectedSuccessSelector = (
  appState: AppState,
): boolean => appState.profile.checkUserConnected.userConnected;
