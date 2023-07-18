import {combineEpics} from 'redux-observable';
import {loadConnectionStatEpic} from '../useCase/loadConnectionState/epic';

export const connectionRootEpics = combineEpics(loadConnectionStatEpic);
