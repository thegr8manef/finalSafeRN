import {AppState} from '../../../redux_configuration/appState';

export const updateLocalProfileSelector = (appState: AppState): boolean => {
  return appState.profile.updateLocalProfile.loading;
};
export const updateLocalProfileFaildSelector = (
  appState: AppState,
): string | undefined => {
  return appState.profile.updateLocalProfile.error;
};
