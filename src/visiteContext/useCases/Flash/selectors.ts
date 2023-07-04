import {AppState} from '../../../redux_configuration/appState';
import {Flash} from '../../domain/entity/Flash';

export const flashSavingSelector = (appState: AppState): Flash | undefined =>
appState.visits.flash.flash;

export const flashErrorSelector = (appState: AppState): string | undefined =>
  appState.visits.flash.errorVisits;
