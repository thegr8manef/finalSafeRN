import {reducerProfile} from '../profileContext/configuration/rootReducer';
import {reducerDashboard} from '../dashboardContext/configuration/rootReducer';
import {AppState} from './appState';
import {combineReducers} from 'redux';

export const reduxReducer = combineReducers<AppState>({
  profile: reducerProfile,

  dashboard: reducerDashboard,
});
