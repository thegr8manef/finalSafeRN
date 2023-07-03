import {AppState} from '../../../redux_configuration/appState';
import {Profile} from '../../domain/entity/profile';

export const loadUserInfoDbSelector = (appState: AppState): boolean =>
  appState.profile.loadProfileDetailsDb.loading;

export const loadUserInfoErrorDbSelector = (
  appState: AppState,
): string | undefined => appState.profile.loadProfileDetailsDb.error;

export const loadUserInfoSuccessDbSelector = (
  appState: AppState,
): Profile | undefined => appState.profile.loadProfileDetailsDb.profile;
