import {Epic, ofType, StateObservable} from 'redux-observable';
import {AppState} from '../../../redux_configuration/appState';
import {ProfileService} from '../../domain/gateway/profileService';
import {User} from '../../domain/entity/user';
import {map, switchMap} from 'rxjs/operators';
import {LOAD_LOCAL_PROFILE} from './actionType';
import {loadLocalProfileSuccess} from './action';
import {Profile} from '../../domain/entity/profile';
import {UserConnectedService} from '../../domain/gateway/userConnectedService';

export const loadLocalProfile: Epic = (
  action$,
  store: StateObservable<AppState>,
  {userServices}: {userServices: UserConnectedService},
) =>
  action$.pipe(
    ofType(LOAD_LOCAL_PROFILE),
    switchMap(action =>
      userServices
        .loadProfileDetails()
        .pipe(map((data: Profile) => loadLocalProfileSuccess(data))),
    ),
  );
