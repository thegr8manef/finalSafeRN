import {combineReducers} from 'redux';
import {VisitsState} from './state';
import {reducerVisitFlash} from '../useCases/saveFlash/reducer';
import {reducerLoadSites} from '@contexts/visiteContext/useCases/LoadSites/reducer';

export const reducerVisits = combineReducers<VisitsState>({
  saveFlash: reducerVisitFlash,
  loadSites: reducerLoadSites,
});
