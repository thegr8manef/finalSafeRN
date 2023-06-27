import {Epic, ofType, StateObservable} from 'redux-observable';
import {AppState} from '../../../redux_configuration/appState';
import {ProfileService} from '../../domain/gateway/profileService';
import {User} from '../../domain/entity/user';
import {map, switchMap} from 'rxjs/operators';
import {LOAD_PROFILE_DETAILS_DB} from './actionType';
import {loadProfileDetailsSuccessDb} from './action';
import {Profile} from '../../domain/entity/profile';
import {UserConnectedService} from '../../domain/gateway/userConnectedService';

export const loadUserInfoDB: Epic = (
  action$,
  store: StateObservable<AppState>,
  {userServices}: {userServices: UserConnectedService},
) =>
  action$.pipe(
    ofType(LOAD_PROFILE_DETAILS_DB),
    switchMap(() =>
      userServices
        .loadProfileDetails()
        .pipe(map(data => loadProfileDetailsSuccessDb(data))),
    ),
  );
