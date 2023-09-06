import { AppState } from "@redux/appState";


export const deleteVisitsErrorSelector = (appState: AppState): string | undefined => 
  appState.visits.deleteVisits.error;

export const deleteVisitsLoadingSelector = (appState: AppState): boolean =>
  appState.visits.deleteVisits.loading;


