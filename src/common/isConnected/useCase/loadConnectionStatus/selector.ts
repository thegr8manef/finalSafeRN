import {AppState} from '../../../../redux_configuration/appState';

export const connectionStatusSelector = (
  appState: AppState,
): boolean | undefined => appState.connection.loadConnectionStatus.status;
