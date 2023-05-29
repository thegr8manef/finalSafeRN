import {AppState} from '../../../redux_configuration/appState';
import {Stat} from '../../domain/entity/Stat';

export const statLoadingSelector = (appState: AppState): boolean =>
  appState.dashboard.stat.loading;

export const statErrorSelector = (appState: AppState): string | undefined =>
  appState.dashboard.stat.error;

export const tokenSelector = (appState: AppState): Stat =>

  appState.dashboard.stat.stat;
