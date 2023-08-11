import {statisticReducer} from '@contexts/statisticContext/configuration/rootReducer';
import {AppState} from './appState';
import {combineReducers} from 'redux';
import {reducerVisits} from '@contexts/visiteContext/configuration/rootReducer';
import {reducerSynchronisation} from '@contexts/synchronisationContext/configuration/rootReducer';
import {reducerConnection} from '@common/isConnected/configuration/rootReducer';
import {reducerProfile} from '@contexts/profileContext/configuration/rootReducer';

export const reduxReducer = combineReducers<AppState>({
  profile: reducerProfile,
  visits: reducerVisits,
  statistic: statisticReducer,
  synchronisation: reducerSynchronisation,
  connection: reducerConnection,
});
