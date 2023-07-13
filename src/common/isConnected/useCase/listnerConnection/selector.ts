import {AppState} from '../../../../redux_configuration/appState';

export const loadConnectionStateSelector = (
  appState: AppState,
): boolean | undefined => appState.connection.loadConnectionState.state;
