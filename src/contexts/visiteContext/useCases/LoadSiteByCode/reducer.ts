import {LoadSiteByCodeState} from '../../configuration/state';
import {
  LOAD_SITE_BY_CODE_FAILED,
  LOAD_SITE_BY_CODE_SUCCESS,
  LOAD_SITE_BY_CODE,
  LoadSiteActionTypes,
} from './actionTypes';

const initialState: LoadSiteByCodeState= {
  error: undefined,
  site: null,
  loading: false,
};

export const reducerLoadSite = (
  state = initialState,
  action: LoadSiteActionTypes,
): LoadSiteByCodeState => {
  switch (action.type) {
    case LOAD_SITE_BY_CODE:
      return {
        error: undefined,
        site: null,
        loading: true,
      };

    case LOAD_SITE_BY_CODE_SUCCESS:
      return {
        error: undefined,
        site: action.payload,
        loading: true,
      };

    case LOAD_SITE_BY_CODE_FAILED:
      return {
        error: action.payload,
        site: null,
        loading: false,
      };
    default:
      return state;
  }
};
