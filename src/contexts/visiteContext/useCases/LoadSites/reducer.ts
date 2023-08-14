import {LoadSitesState} from '../../configuration/state';
import {
  LOAD_SITES_FAILED,
  LOAD_SITES_SUCCESS,
  LOAD_SITES,
  LoadSitesActionTypes,
} from './actionTypes';

const initialState: LoadSitesState= {
  error: undefined,
  sites: null,
  loading: false,
};

export const reducerLoadSites = (
  state = initialState,
  action: LoadSitesActionTypes,
): LoadSitesState => {
  switch (action.type) {
    case LOAD_SITES:
      return {
        error: undefined,
        sites: null,
        loading: true,
      };

    case LOAD_SITES_SUCCESS:
      return {
        error: undefined,
        sites: action.payload,
        loading: false,
      };

    case LOAD_SITES_FAILED:
      return {
        error: action.payload,
        sites: null,
        loading: false,
      };
    default:
      return state;
  }
};
