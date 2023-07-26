import {LoadProfileState, ProfileState} from '../../configuration/state';
import {
  LOAD_PROFILE_DETAILS,
  LOAD_PROFILE_DETAILS_FAILED,
  LOAD_PROFILE_DETAILS_SUCCESS,
  LoadProfileDetailsActionTypes,
} from './actionType';

const initialState: LoadProfileState = {
  loading: false,
  error: undefined,
  user: undefined,
};

export const reducerProfileDetails = (
  state = initialState,
  action: LoadProfileDetailsActionTypes,
): LoadProfileState => {
  switch (action.type) {
    case LOAD_PROFILE_DETAILS:
      return {loading: true, error: undefined, user: undefined};

    case LOAD_PROFILE_DETAILS_SUCCESS:
      return {loading: false, error: undefined, user: action.payload};

    case LOAD_PROFILE_DETAILS_FAILED:
      return {loading: false, error: action.payload, user: undefined};

    default:
      return state;
  }
};
