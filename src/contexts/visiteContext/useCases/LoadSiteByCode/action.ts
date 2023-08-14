import {Site} from '../../domain/entity/Site';
import {
  LoadSiteByCodeActionFailed,
  LoadSiteByCodeActionSuccess,
  LOAD_SITE_BY_CODE,
  LOAD_SITE_BY_CODE_FAILED,
  LOAD_SITE_BY_CODE_SUCCESS,
  LoadSiteByCodeAction,
} from './actionTypes';

export const LoadSiteByCode = (code: string): LoadSiteByCodeAction => ({
  type: LOAD_SITE_BY_CODE,
  payload: code,
});
export const LoadSiteByCodeFailed = (
  error: string,
): LoadSiteByCodeActionFailed => ({
  type: LOAD_SITE_BY_CODE_FAILED,
  payload: error,
});
export const LoadSiteByCodeSuccess = (
  site: Site,
): LoadSiteByCodeActionSuccess => ({
  type: LOAD_SITE_BY_CODE_SUCCESS,
  payload: site,
});
