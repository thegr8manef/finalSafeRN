import {combineEpics} from 'redux-observable';
import {loginEpic} from '../useCases/Login/epic';
import {loadUserInfo} from '../useCases/ProfileDetails/epic';
import {checkUserEpic} from '../useCases/CheckUserConnected/epic';
import {setUserEpic} from '../useCases/SetUserConnected/epic';
import {loadLocalProfile} from '../useCases/LoadLocalProfile/epic';
import {updateLocalProfile} from '../useCases/UpdateLocalProfile/epic';

export const profileRootEpics = combineEpics(
  loginEpic,
  loadUserInfo,
  checkUserEpic,
  setUserEpic,
  loadLocalProfile,
  updateLocalProfile,
);
