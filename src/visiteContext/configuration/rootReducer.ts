import {combineReducers} from 'redux';
import {VisitsState} from './state';
import {reducerVisitFlash} from '../useCases/saveFlash/reducer';
import {reducerLoadChantier} from '../useCases/LoadChantierByCode/reducer';

export const reducerVisits = combineReducers<VisitsState>({
  saveFlash: reducerVisitFlash,
  loadChantierByCode: reducerLoadChantier,
});
