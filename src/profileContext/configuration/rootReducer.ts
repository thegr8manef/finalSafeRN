import {combineReducers} from 'redux';
import {LoadProfileState, ProfileState} from './state';
import {reducerLogin} from '../useCases/Login/reducer';
import {reducerProfileDetails} from '../useCases/ProfileDetails/reducer';
import {reducerCheckUser} from '../useCases/CheckUserConnected/reducer';
import {reducerSetUserConnected} from '../useCases/SetUserConnected/reducer';
import {reducerProfileDetailsDB} from '../useCases/ProfileDetailsDB/reducer';

export const reducerProfile = combineReducers<ProfileState>({
  login: reducerLogin,
  loadProfileDetails: reducerProfileDetails,
  checkUserConnected: reducerCheckUser,
  setUserConnected: reducerSetUserConnected,
  loadProfileDetailsDb: reducerProfileDetailsDB,
});
