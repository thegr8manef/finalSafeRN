import {AppState} from '../../../redux_configuration/appState';
import {Stat} from '../../domain/entity/Stat';

export const loadRemoteStatsLoadingSelector = (appState: AppState): boolean =>
  appState.statistic.loadRemoteStats.loading;

export const loadRemoteStatsErrorSelector = (
  appState: AppState,
): string | undefined => appState.statistic.loadRemoteStats.error;

export const remoteStatsSelector = (appState: AppState): Stat | undefined =>
  appState.statistic.loadRemoteStats.stat;
