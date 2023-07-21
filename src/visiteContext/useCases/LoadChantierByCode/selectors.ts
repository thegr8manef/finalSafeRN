import {AppState} from '../../../redux_configuration/appState';
import {Chantier} from '../../domain/entity/Chantier';

export const loadChantierErrorSelector = (
  appState: AppState,
): string | undefined => appState.loadChantier.errorLoadingChantier;

export const loadChantierSelector = (appState: AppState): Chantier | null =>
  appState.loadChantier.LoadingChantier;

export const loadChantierSuccessSelector = (appState: AppState): boolean =>
  appState.loadChantier.LoadingChantierSuccess;
