import { AppState } from "@redux/appState";


export const deleteErrorSelector = (appState: AppState): string | undefined => 
  appState.visits.deleteVisits.error;

export const loadingDeleteVisitsSelector = (appState: AppState): boolean =>
  appState.visits.deleteVisits.loading;


