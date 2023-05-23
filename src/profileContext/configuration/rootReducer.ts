import {combineReducers} from 'redux';
import {ProfileState} from './state';
import {reducerLogin} from '../useCases/Login/reducer';

export const reducerProfile = combineReducers<ProfileState>({
  login: reducerLogin,
});
