import {AppState} from '../../../redux_configuration/appState';
import {Profile} from '../../domain/entity/profile';

export const loadLocalProfileSelector = (appState: AppState): boolean =>
  appState.profile.loadLocalProfile.loading;

export const loadLocalProfileErrorSelector = (
  appState: AppState,
): string | undefined => appState.profile.loadLocalProfile.error;

export const loadLocalProfileSuccessSelector = (
  appState: AppState,
): Profile | undefined => appState.profile.loadLocalProfile.profile;
