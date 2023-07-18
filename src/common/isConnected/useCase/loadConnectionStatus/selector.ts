import {AppState} from '../../../../redux_configuration/appState';

export const loadConnectionStatusSelector = (
  appState: AppState,
): boolean | undefined => appState.connection.loadConnectionStatus.status;
