import {combineReducers} from 'redux';
import {VisitsState} from './state';
import {reducerStat} from '../useCases/Flash/reducer';

export const reducerVisits = combineReducers<VisitsState>({
  flash: reducerStat,
});
