import {
  LoadProfileState,
  LoadLocalProfileState,
} from '../../configuration/state';
import {
  LOAD_LOCAL_PROFILE,
  LOAD_LOCAL_PROFILE_FAILED,
  LOAD_LOCAL_PROFILE_SUCCESS,
  LoadLoacalProfileActionDbTypes,
} from './actionType';

const initialState: LoadLocalProfileState = {
  loading: false,
  error: undefined,
  profile: undefined,
};

export const reducerLoadLocalProfile = (
  state = initialState,
  action: LoadLoacalProfileActionDbTypes,
): LoadLocalProfileState => {
  switch (action.type) {
    case LOAD_LOCAL_PROFILE:
      return {loading: true, error: undefined, profile: undefined};

    case LOAD_LOCAL_PROFILE_SUCCESS:
      return {loading: false, error: undefined, profile: action.payload};

    case LOAD_LOCAL_PROFILE_FAILED:
      return {loading: false, error: action.payload, profile: undefined};

    default:
      return state;
  }
};
