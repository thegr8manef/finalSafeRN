import {combineEpics} from 'redux-observable';
import {loginEpic} from '../useCases/Login/epic';

export const profileRootEpics = combineEpics(loginEpic);
