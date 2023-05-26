import {AppState} from '../../../redux_configuration/appState';
import { Profile } from '../../domain/entity/profile';

export const loginLoadingSelector = (appState: AppState): boolean =>
  appState.profile.login.loading;

export const loginErrorSelector = (appState: AppState): string | undefined =>
  appState.profile.login.error;

export const profileSelector = (appState: AppState): Profile | undefined =>
  appState.profile.login.profile;
