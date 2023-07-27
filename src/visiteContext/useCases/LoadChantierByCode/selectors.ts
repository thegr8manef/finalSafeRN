import {AppState} from '../../../redux_configuration/appState';
import {Chantier} from '../../domain/entity/Chantier';

export const loadChantierByCodeErrorSelector = (
  appState: AppState,
): string | undefined => appState.loadChantier.error;

export const loadingChantierByCodeSelector = (appState: AppState): boolean =>
  appState.loadChantier.loading;

export const chantierSelector = (appState: AppState): Chantier | null =>
  appState.loadChantier.chantier;
