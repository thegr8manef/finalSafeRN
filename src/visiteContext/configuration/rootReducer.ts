import {combineReducers} from 'redux';
import {VisitsState} from './state';
import {reducerVisitFlash} from '../useCases/Flash/reducer';
import {reducerSearchChantier} from '../useCases/SearchChantierByCode/reducer';

export const reducerVisits = combineReducers<VisitsState>({
  flash: reducerVisitFlash,
  SearchChantier: reducerSearchChantier,
});
