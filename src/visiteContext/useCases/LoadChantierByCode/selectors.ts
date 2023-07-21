import {AppState} from '../../../redux_configuration/appState';
import {Chantier} from '../../domain/entity/Chantier';

export const loadChantierByCodeErrorSelector = (
  appState: AppState,
): string | undefined => appState.loadChantier.errorLoadingChantierByCode;

export const loadingChantierByCodeSelector = (appState: AppState): boolean =>
  appState.loadChantier.LoadingChantierByCode;

export const loadChantierByCodeSuccessSelector = (
  appState: AppState,
): Chantier | null => appState.loadChantier.LoadingChantierByCodeSuccess;
