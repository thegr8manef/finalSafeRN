import {Profile} from '../../domain/entity/profile';
import {User} from '../../domain/entity/user';

export const LOAD_PROFILE_DETAILS_DB = 'LOAD_PROFILE_DETAILS_DB';

export const LOAD_PROFILE_DETAILS_SUCCESS_DB =
  'LOAD_PROFILE_DETAILS_SUCCESS_DB';

export const LOAD_PROFILE_DETAILS_FAILED_DB = 'LOAD_PROFILE_DETAILS_FAILED_DB';

export interface LoadProfileDetailsDbAction {
  type: typeof LOAD_PROFILE_DETAILS_DB;
}

export interface LoadProfileDetailsSuccessDbAction {
  type: typeof LOAD_PROFILE_DETAILS_SUCCESS_DB;
  payload: Profile;
}

export interface LoadProfileDetailsFailedDbAction {
  type: typeof LOAD_PROFILE_DETAILS_FAILED_DB;
  payload: string;
}

export type LoadProfileDetailsActionDbTypes =
  | LoadProfileDetailsDbAction
  | LoadProfileDetailsSuccessDbAction
  | LoadProfileDetailsFailedDbAction;
