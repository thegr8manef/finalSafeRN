import {Epic, ofType, StateObservable} from 'redux-observable';
import {AppState} from '../../../redux_configuration/appState';
import {LOGIN} from './actionTypes';
import {catchError, concatMap, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {ProfileService} from '../../domain/gateway/profileService';
import {loginFailed, loginSuccess} from './action';
import {Profile} from '../../domain/entity/profile';
import {setUserConnected} from '../CheckUserConnected/actions';

export const loginEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {profileService}: {profileService: ProfileService},
) =>
  action$.pipe(
    ofType(LOGIN),
    switchMap(() =>
      profileService.loginMsal().pipe(
        concatMap((profile: Profile) => {
          return [loginSuccess(profile), setUserConnected(true)];
        }),
        catchError(error => of(loginFailed(error))),
      ),
    ),
  );
