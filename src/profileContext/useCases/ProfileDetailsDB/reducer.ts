import {LoadProfileState, LoadProfileDbState} from '../../configuration/state';
import {
  LOAD_PROFILE_DETAILS_DB,
  LOAD_PROFILE_DETAILS_FAILED_DB,
  LOAD_PROFILE_DETAILS_SUCCESS_DB,
  LoadProfileDetailsActionDbTypes,
} from './actionType';

const initialState: LoadProfileDbState = {
  loading: false,
  error: undefined,
  profile: undefined,
};

export const reducerProfileDetailsDB = (
  state = initialState,
  action: LoadProfileDetailsActionDbTypes,
): LoadProfileDbState => {
  switch (action.type) {
    case LOAD_PROFILE_DETAILS_DB:
      return {loading: true, error: undefined, profile: undefined};

    case LOAD_PROFILE_DETAILS_SUCCESS_DB:
      return {loading: false, error: undefined, profile: action.payload};

    case LOAD_PROFILE_DETAILS_FAILED_DB:
      return {loading: false, error: action.payload, profile: undefined};

    default:
      return state;
  }
};
