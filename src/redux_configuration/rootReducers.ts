import {reducerProfile} from '../profileContext/configuration/rootReducer';
import {reducerDashboard} from '../dashboardContext/configuration/rootReducer';
import {AppState} from './appState';
import {combineReducers} from 'redux';
import {reducerVisits} from '../visitsContext/configuration/rootReducer';

export const reduxReducer = combineReducers<AppState>({
  profile: reducerProfile,
  visits: reducerVisits,
  dashboard: reducerDashboard,
});
