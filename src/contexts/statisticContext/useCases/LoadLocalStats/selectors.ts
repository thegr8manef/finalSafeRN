import {AppState} from '../../../redux_configuration/appState';
import {Stat} from '../../domain/entity/Stat';

export const localStatsSelector = (appState: AppState): Stat | undefined =>
  appState.statistic.loadLocalStats.stat;

export const loadLocalStatLoadingSelector = (appState: AppState): boolean =>
  appState.statistic.loadLocalStats.loading;

export const loadLocalStatErrorSelector = (
  appState: AppState,
): string | undefined => appState.statistic.loadLocalStats.error;
