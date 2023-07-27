import {combineEpics} from 'redux-observable';
import {loadDataEpic} from '../useCases/LoadData/epic';

export const synchronisationRootEpics = combineEpics(loadDataEpic);
