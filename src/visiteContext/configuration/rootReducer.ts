import {combineReducers} from 'redux';
import {VisitsState} from './state';
import {reducerVisitFlash} from '../useCases/Flash/reducer';
import {reducerLoadChantier} from '../useCases/LoadChantierByCode/reducer';

export const reducerVisits = combineReducers<VisitsState>({
  flash: reducerVisitFlash,
  LoadingChantier: reducerLoadChantier,
});
