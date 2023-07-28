import {combineEpics} from 'redux-observable';
import {loginEpic} from '../useCases/Login/epic';
import {loadProfileDetailsEpic} from '../useCases/ProfileDetails/epic';
import {setUserEpic} from '../useCases/SetUserConnected/epic';
import {loadLocalProfile} from '../useCases/LoadLocalProfile/epic';
import {updateLocalProfile} from '../useCases/UpdateLocalProfile/epic';

export const profileRootEpics = combineEpics(
  loginEpic,
  loadProfileDetailsEpic,
  setUserEpic,
  loadLocalProfile,
  updateLocalProfile,
);
