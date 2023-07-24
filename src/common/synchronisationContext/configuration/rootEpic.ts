import {combineEpics} from 'redux-observable';
import {loadDataEpic} from '../useCases/LoadData/epic';
import {saveDataEpic} from '../useCases/SaveInLocal/epic';

export const synchronisationRootEpics = combineEpics(
  loadDataEpic,
  saveDataEpic,
);
