import {combineEpics} from 'redux-observable';
import {loadConnectionStatEpic} from '../useCase/loadConnectionStatus/epic';

export const connectionRootEpics = combineEpics(loadConnectionStatEpic);
