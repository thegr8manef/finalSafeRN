import {Epic, ofType, StateObservable} from 'redux-observable';
import {AppState} from '../../../redux_configuration/appState';
import {map, switchMap, catchError} from 'rxjs/operators';
import {LOAD_LOCAL_PROFILE} from './actionType';
import {loadLocalProfileFailed, loadLocalProfileSuccess} from './action';
import {Profile} from '../../domain/entity/profile';
import {UserRepository} from '../../domain/gateway/userReposiory';
import {of} from 'rxjs';

export const loadLocalProfile: Epic = (
  action$,
  store: StateObservable<AppState>,
  {userRepository}: {userRepository: UserRepository},
) =>
  action$.pipe(
    ofType(LOAD_LOCAL_PROFILE),
    switchMap(() =>
      userRepository.loadProfileDetails().pipe(
        map((data: Profile) => loadLocalProfileSuccess(data)),
        catchError(error => of(loadLocalProfileFailed(error))),
      ),
    ),
  );
