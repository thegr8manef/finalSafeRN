import {Profile} from '../../domain/entity/profile';

export const LOAD_LOCAL_PROFILE = 'LOAD_LOCAL_PROFILE';

export const LOAD_LOCAL_PROFILE_SUCCESS = 'LOAD_LOCAL_PROFILE_SUCCESS';

export const LOAD_LOCAL_PROFILE_FAILED = 'LOAD_LOCAL_PROFILE_FAILED';

export interface LoadLocalProfileAction {
  type: typeof LOAD_LOCAL_PROFILE;
}

export interface LoadLocalProfileSuccessAction {
  type: typeof LOAD_LOCAL_PROFILE_SUCCESS;
  payload: Profile;
}

export interface LoadLocalProfileFailedAction {
  type: typeof LOAD_LOCAL_PROFILE_FAILED;
  payload: string;
}

export type LoadLoacalProfileActionDbTypes =
  | LoadLocalProfileAction
  | LoadLocalProfileSuccessAction
  | LoadLocalProfileFailedAction;
