import {AppState} from '../../../redux_configuration/appState';

export const searchChantierErrorSelector = (
  appState: AppState,
): string | undefined => appState.searchChantier.errorSearchChantier;

export const searchChantierSelector = (
  appState: AppState,
): string | undefined => appState.searchChantier.SearchChantierSuccess;
