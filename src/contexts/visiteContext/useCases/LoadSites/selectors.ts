
import {Site} from '../../domain/entity/Site';
import {AppState} from "@redux/appState";

export const loadSitesErrorSelector = (appState: AppState): string | undefined => appState.visits.loadSites.error;

export const loadingSitesSelector = (appState: AppState): boolean =>
  appState.visits.loadSites.loading;

export const sitesSelector = (appState: AppState): Site[] | null =>
  appState.visits.loadSites.sites;
