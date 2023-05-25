import {reducerLoadProfile, reducerProfile} from '../profileContext/configuration/rootReducer';
import {AppState} from './appState';
import {combineReducers} from 'redux';

export const reduxReducer = combineReducers<AppState>({
  profile: reducerProfile,
  profileDetails  : reducerLoadProfile

});
