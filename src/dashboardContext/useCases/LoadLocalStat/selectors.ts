import {AppState} from '../../../redux_configuration/appState';
import {Stat} from '../../domain/entity/Stat';

export const loadLocalStatSelector = (appState: AppState): Stat | undefined =>
  appState.dashboard.loadLocalStat.stat;

export const loadLocalStatLoadingSelector = (appState: AppState): boolean =>
  appState.dashboard.loadLocalStat.loading;

export const loadLocalStatErrorSelector = (
  appState: AppState,
): string | undefined => appState.dashboard.stat.error;
