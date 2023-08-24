import Remarque from '../../domain/entity/Remarque';
import {AppState} from "@redux/appState";

export const loadRemarquesErrorSelector = (appState: AppState): string | undefined => 
  appState.visits.loadRemarques.error;

export const loadingRemarquesSelector = (appState: AppState): boolean =>
  appState.visits.loadRemarques.loading;

export const loadRemarquesSelector = (appState: AppState): Remarque[] | undefined =>
  appState.visits.loadRemarques.remarques;
