import {combineEpics} from 'redux-observable';
import {loadDataEpic} from '../useCases/SynchronisationLoad/epic';
import {saveDataEpic} from '../useCases/SynchronisationSave/epic';

export const synchronisationRootEpics = combineEpics(
  loadDataEpic,
  saveDataEpic,
);
