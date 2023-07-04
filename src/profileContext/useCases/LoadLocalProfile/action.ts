import {Profile} from '../../domain/entity/profile';
import {User} from '../../domain/entity/user';
import {
  LOAD_LOCAL_PROFILE,
  LOAD_LOCAL_PROFILE_FAILED,
  LOAD_LOCAL_PROFILE_SUCCESS,
  LoadLocalProfileAction,
  LoadLocalProfileFailedAction,
  LoadLocalProfileSuccessAction,
} from './actionType';

export const loadLocalProfile = (): LoadLocalProfileAction => ({
  type: LOAD_LOCAL_PROFILE,
});

export const loadLocalProfileSuccess = (
  profile: Profile,
): LoadLocalProfileSuccessAction => ({
  type: LOAD_LOCAL_PROFILE_SUCCESS,
  payload: profile,
});

export const loadLocalProfileFailed = (
  error: string,
): LoadLocalProfileFailedAction => ({
  type: LOAD_LOCAL_PROFILE_FAILED,
  payload: error,
});
