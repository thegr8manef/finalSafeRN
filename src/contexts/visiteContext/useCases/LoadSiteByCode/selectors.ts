import {AppState} from '../../../redux_configuration/appState';
import {Site} from '../../domain/entity/Site';

export const loadSiteByCodeErrorSelector = (appState: AppState): string | undefined => appState.visits.loadSiteByCode.error;

export const loadingSiteByCodeSelector = (appState: AppState): boolean =>
  appState.visits.loadSiteByCode.loading;

export const siteSelector = (appState: AppState): Site | null =>
  appState.visits.loadSiteByCode.site;
