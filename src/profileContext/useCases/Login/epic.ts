import {Epic, ofType, StateObservable} from 'redux-observable';
import {AppState} from '../../../redux_configuration/appState';
import {LOGIN} from './actionTypes';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {ProfileService} from '../../domain/gateway/profileService';
import {loginFailed, loginSuccess} from './action';
import { Profile } from '../../domain/entity/profile';

export const loginEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {profileService}: {profileService: ProfileService},
) =>
  action$.pipe(
    ofType(LOGIN),
    switchMap(() =>
      profileService.loginMsal().pipe(
        map((profile: Profile) => loginSuccess(profile)),
        catchError(error => of(loginFailed(error))),
      ),
    ),
  );
