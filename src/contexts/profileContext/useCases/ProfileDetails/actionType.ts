import {User} from '../../domain/entity/user';

export const LOAD_PROFILE_DETAILS = 'LOAD_PROFILE_DETAILS';

export const LOAD_PROFILE_DETAILS_SUCCESS = 'LOAD_PROFILE_DETAILS_SUCCESS';

export const LOAD_PROFILE_DETAILS_FAILED = 'LOAD_PROFILE_DETAILS_FAILED';

export interface LoadProfileDetailsAction {
  type: typeof LOAD_PROFILE_DETAILS;
  payload: string;
}

export interface LoadProfileDetailsSuccessAction {
  type: typeof LOAD_PROFILE_DETAILS_SUCCESS;
  payload: User;
}

export interface LoadProfileDetailsFailedAction {
  type: typeof LOAD_PROFILE_DETAILS_FAILED;
  payload: string;
}

export type LoadProfileDetailsActionTypes =
  | LoadProfileDetailsAction
  | LoadProfileDetailsSuccessAction
  | LoadProfileDetailsFailedAction;
