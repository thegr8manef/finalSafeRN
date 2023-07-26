import {reducerProfile} from '../profileContext/configuration/rootReducer';
import {reducerDashboard} from '../dashboardContext/configuration/rootReducer';
import {AppState} from './appState';
import {combineReducers} from 'redux';
import {reducerVisits} from '../visiteContext/configuration/rootReducer';
import {reducerSynchronisation} from '../synchronisationContext/configuration/rootReducer';
import {reducerConnection} from '../common/isConnected/configuration/rootReducer';

export const reduxReducer = combineReducers<AppState>({
  profile: reducerProfile,
  visits: reducerVisits,
  dashboard: reducerDashboard,
  synchronisation: reducerSynchronisation,
  connection: reducerConnection,
});
