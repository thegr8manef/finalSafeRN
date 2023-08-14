import {Site} from '../../domain/entity/Site';
import {
  LoadSitesFailedAction,
  LoadSitesSuccessAction,
  LOAD_SITES,
  LOAD_SITES_FAILED,
  LOAD_SITES_SUCCESS,
  LoadSitesAction,
} from './actionTypes';

export const LoadSites = (): LoadSitesAction => ({
  type: LOAD_SITES
});
export const LoadSitesFailed = (
  error: string,
): LoadSitesFailedAction => ({
  type: LOAD_SITES_FAILED,
  payload: error,
});
export const LoadSitesSuccess = (
  sites: Site[],
): LoadSitesSuccessAction => ({
  type: LOAD_SITES_SUCCESS,
  payload: sites,
});
