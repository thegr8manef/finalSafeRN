import {combineEpics} from 'redux-observable';
import {loadConnectionStatEpic} from '../useCase/listnerConnection/epic';

export const connectionRootEpics = combineEpics(loadConnectionStatEpic);
