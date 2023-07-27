import {User} from '../../domain/entity/user';
import {
  LOAD_PROFILE_DETAILS,
  LOAD_PROFILE_DETAILS_FAILED,
  LOAD_PROFILE_DETAILS_SUCCESS,
  LoadProfileDetailsAction,
  LoadProfileDetailsFailedAction,
  LoadProfileDetailsSuccessAction,
} from './actionType';

export const loadProfileDetails = (
  accessToken: string,
): LoadProfileDetailsAction => ({
  type: LOAD_PROFILE_DETAILS,
  payload: accessToken,
});

export const loadProfileDetailsSuccess = (
  userInfo: User,
): LoadProfileDetailsSuccessAction => ({
  type: LOAD_PROFILE_DETAILS_SUCCESS,
  payload: userInfo,
});

export const loadProfileDetailsFailed = (
  error: string,
): LoadProfileDetailsFailedAction => ({
  type: LOAD_PROFILE_DETAILS_FAILED,
  payload: error,
});
