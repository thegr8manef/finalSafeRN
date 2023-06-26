import {Profile} from '../../domain/entity/profile';
import {SET_USER_CONNECTED, SetUserConnected} from './actionTypes';

export const setUserConnected = (profile: Profile): SetUserConnected => ({
  type: SET_USER_CONNECTED,
  payload: profile,
});
