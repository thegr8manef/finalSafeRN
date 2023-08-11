import {combineReducers} from 'redux';
import {VisitsState} from './state';
import {reducerVisitFlash} from '../useCases/saveFlash/reducer';
import {reducerLoadSite} from '../useCases/LoadSiteByCode/reducer';

export const reducerVisits = combineReducers<VisitsState>({
  saveFlash: reducerVisitFlash,
  loadSiteByCode: reducerLoadSite,
});
