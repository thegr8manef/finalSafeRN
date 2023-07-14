import {combineEpics} from 'redux-observable';
import {loadConnectionStatEpic} from '../useCase/listnerConnection/epic';
import {setConnectionStatEpic} from '../useCase/setConnection/epic';

export const connectionRootEpics = combineEpics(
  loadConnectionStatEpic,
  setConnectionStatEpic,
);
