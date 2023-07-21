import {AppState} from '../../../redux_configuration/appState';

export const loadChantierErrorSelector = (
  appState: AppState,
): string | undefined => appState.loadChantier.errorLoadingChantier;

export const loadChantierSelector = (appState: AppState): string | undefined =>
  appState.loadChantier.LoadingChantier;

export const loadChantierSuccessSelector = (
  appState: AppState,
): string | undefined => appState.loadChantier.LoadingChantierSuccess;
