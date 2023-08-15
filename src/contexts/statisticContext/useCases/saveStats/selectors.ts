import { AppState } from "@redux/appState";


export const saveStatsLoadingSelector = (appState: AppState): boolean =>
  appState.statistic.saveStats.loading;

export const saveStatsErrorSelector = (
  appState: AppState,
): string | undefined => appState.statistic.saveStats.error;
