import {Profile} from '../../domain/entity/profile';
import {User} from '../../domain/entity/user';

import {
  LOAD_PROFILE_DETAILS_DB,
  LOAD_PROFILE_DETAILS_SUCCESS_DB,
  LOAD_PROFILE_DETAILS_FAILED_DB,
  LoadProfileDetailsDbAction,
  LoadProfileDetailsFailedDbAction,
  LoadProfileDetailsSuccessDbAction,
} from './actionType';

export const loadProfileDetailsDb = (): LoadProfileDetailsDbAction => ({
  type: LOAD_PROFILE_DETAILS_DB,
});

export const loadProfileDetailsSuccessDb = (
  profile: Profile,
): LoadProfileDetailsSuccessDbAction => ({
  type: LOAD_PROFILE_DETAILS_SUCCESS_DB,
  payload: profile,
});

export const loadProfileDetailsFailedDb = (
  error: string,
): LoadProfileDetailsFailedDbAction => ({
  type: LOAD_PROFILE_DETAILS_FAILED_DB,
  payload: error,
});
