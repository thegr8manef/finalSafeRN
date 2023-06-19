import {combineEpics} from 'redux-observable';
import {loginEpic} from '../useCases/Login/epic';
import { loadUserInfo } from '../useCases/ProfileDetails/epic';

export const profileRootEpics = combineEpics(loginEpic, loadUserInfo, );
