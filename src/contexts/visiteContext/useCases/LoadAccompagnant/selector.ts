import { Accompagnant } from "@contexts/visiteContext/domain/entity/Accompagnant";
import {AppState} from "@redux/appState";

export const loadAccompagnantsErrorSelector = (appState: AppState): string | undefined => 
  appState.visits.LoadAccompagnants.error;

export const loadAccompagnantsLoadingSelector = (appState: AppState): boolean =>
  appState.visits.LoadAccompagnants.loading;

export const loadAccompagnantsSelector = (appState: AppState): Accompagnant[] | undefined =>
  appState.visits.LoadAccompagnants.Accompagnant;
