import { AppState } from "@redux/appState";

export const saveFashErrorSelector = (appState: AppState): string | undefined =>
    appState.visits.saveVisit.error;

export const saveVisitLoadingSelector = (appState: AppState): boolean =>
    appState.visits.saveVisit.loading;
