import {User} from '../../domain/entity/user';

export const UPDATE_LOCAL_PROFILE = 'UPDATE_LOCAL_PROFILE';
export const UPDATE_LOCAL_PROFILE_SUCCESS = 'UPDATE_LOCAL_PROFILE_SUCCESS';
export const UPDATE_LOCAL_PROFILE_FAILED = 'UPDATE_LOCAL_PROFILE_FAILED';

export interface UpdateLocalProfile {
  type: typeof UPDATE_LOCAL_PROFILE;
  payload: User;
}

export interface UpdateLocalProfileSuccess {
  type: typeof UPDATE_LOCAL_PROFILE_SUCCESS;
}

export interface UpdateLocalProfileFailed {
  type: typeof UPDATE_LOCAL_PROFILE_FAILED;
  payload: string;
}

export type UpdateLocalProfileActionType =
  | UpdateLocalProfile
  | UpdateLocalProfileSuccess
  | UpdateLocalProfileFailed;
