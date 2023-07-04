import {UpdateLocalProfileState} from '../../configuration/state';
import {
  UPDATE_LOCAL_PROFILE,
  UPDATE_LOCAL_PROFILE_FAILED,
  UPDATE_LOCAL_PROFILE_SUCCESS,
  UpdateLocalProfileActionType,
} from './actionsTypes';

const initialState: UpdateLocalProfileState = {
  loading: false,
  error: undefined,
};

export const updateLocalProflieReducer = (
  state = initialState,
  action: UpdateLocalProfileActionType,
): UpdateLocalProfileState => {
  switch (action.type) {
    case UPDATE_LOCAL_PROFILE: {
      return {error: undefined, loading: true};
    }
    case UPDATE_LOCAL_PROFILE_SUCCESS: {
      return {error: undefined, loading: false};
    }
    case UPDATE_LOCAL_PROFILE_FAILED: {
      return {error: action.payload, loading: false};
    }
    default:
      return state;
  }
};
