import {combineReducers} from 'redux';
import {LoadProfileState, ProfileDetailsStat, ProfileState} from './state';
import {reducerLogin} from '../useCases/Login/reducer';
import { reducerProfileDetails } from '../useCases/ProfileDetails/reducer';

export const reducerProfile = combineReducers<ProfileState>({
  login: reducerLogin,
  
});


export const reducerLoadProfile = combineReducers<ProfileDetailsStat>({
    loadProfileDetails : reducerProfileDetails
});
