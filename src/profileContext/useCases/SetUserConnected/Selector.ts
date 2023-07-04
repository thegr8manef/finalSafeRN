import {AppState} from '../../../redux_configuration/appState';
import {Profile} from '../../domain/entity/profile';

export const setUserConnectedSelector = (
  appState: AppState,
): Profile | undefined => {
  return appState.profile.setUserConnected.profile;
};
