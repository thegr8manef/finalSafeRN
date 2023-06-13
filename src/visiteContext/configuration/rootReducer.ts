import {combineReducers} from 'redux';
import {VisitsState} from './state';
import {reducerVisitFlash} from '../useCases/Flash/reducer';

export const reducerVisits = combineReducers<VisitsState>({
  flash: reducerVisitFlash,
});
