import { AppState } from "@redux/appState";

export const saveFashErrorSelector = (appState: AppState): string | undefined =>
  appState.visits.saveFlash.error;

export const saveFlashLoadingSelector = (appState: AppState): boolean =>
  appState.visits.saveFlash.loading;
