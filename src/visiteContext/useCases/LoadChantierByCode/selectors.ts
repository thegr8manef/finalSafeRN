import {AppState} from '../../../redux_configuration/appState';
import {Chantier} from '../../domain/entity/Chantier';

export const loadChantierByCodeErrorSelector = (appState: AppState): string | undefined => appState.visits.loadChantierByCode.error;

export const loadingChantierByCodeSelector = (appState: AppState): boolean =>
  appState.visits.loadChantierByCode.loading;

export const chantierSelector = (appState: AppState): Chantier | null =>
  appState.visits.loadChantierByCode.chantier;
