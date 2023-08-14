import {User} from '../../domain/entity/user';
import {
  UPDATE_LOCAL_PROFILE,
  UPDATE_LOCAL_PROFILE_FAILED,
  UPDATE_LOCAL_PROFILE_SUCCESS,
} from './actionsTypes';

export const updateLocalProfile = (user: User) => ({
  type: UPDATE_LOCAL_PROFILE,
  payload: user,
});

export const updateLocalProfileSuccess = () => ({
  type: UPDATE_LOCAL_PROFILE_SUCCESS,
});

export const UpdateLocalProfileFailed = (error: string) => ({
  type: UPDATE_LOCAL_PROFILE_FAILED,
  payload: error,
});
