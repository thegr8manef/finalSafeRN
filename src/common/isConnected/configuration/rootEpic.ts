import {combineEpics} from 'redux-observable';
import {loadConnectionStatusEpic} from '../useCase/loadConnectionStatus/epic';

export const connectionRootEpics = combineEpics(loadConnectionStatusEpic);
