import {Epic, ofType, StateObservable} from 'redux-observable';
import {AppState} from '../../../redux_configuration/appState';
import {SINUP} from './actionTypes';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {ProfileService} from '../../domain/gateway/profileService';
import {signupFailed, signupSuccess} from './actions';
export const signupEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {profileService}: {profileService: ProfileService},
) =>
  action$.pipe(
    ofType(SINUP),
    switchMap(() =>
      profileService.signupMsal().pipe(
        map((token: string) => signupSuccess(token)),
        catchError(error => of(signupFailed(error))),
      ),
    ),
  );
