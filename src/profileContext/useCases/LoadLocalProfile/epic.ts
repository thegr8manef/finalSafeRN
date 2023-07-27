import {Epic, ofType, StateObservable} from 'redux-observable';
import {AppState} from '../../../redux_configuration/appState';
import {map, switchMap} from 'rxjs/operators';
import {LOAD_LOCAL_PROFILE} from './actionType';
import {loadLocalProfileSuccess} from './action';
import {Profile} from '../../domain/entity/profile';
import {UserRepository} from '../../domain/gateway/userReposiory';

export const loadLocalProfile: Epic = (
  action$,
  store: StateObservable<AppState>,
  {userRepository}: {userRepository: UserRepository},
) =>
  action$.pipe(
    ofType(LOAD_LOCAL_PROFILE),
    switchMap(() =>
      userRepository
        .loadProfileDetails()
        .pipe(map((data: Profile) => loadLocalProfileSuccess(data))),
    ),
  );
