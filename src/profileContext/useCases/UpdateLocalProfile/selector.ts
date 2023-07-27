import {AppState} from '../../../redux_configuration/appState';

export const updateLocalProfileLoadingSelector = (
  appState: AppState,
): boolean => {
  return appState.profile.updateLocalProfile.loading;
};
export const updateLocalProfileErrorSelector = (
  appState: AppState,
): string | undefined => {
  return appState.profile.updateLocalProfile.error;
};
