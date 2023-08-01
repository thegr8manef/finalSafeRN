import {AppState} from 'react-native';
import {Epic, ofType, StateObservable} from 'redux-observable';
import {UPDATE_LOCAL_PROFILE} from './actionsTypes';
import {UserRepository} from '../../domain/gateway/userReposiory';
import {UpdateLocalProfileFailed, updateLocalProfileSuccess} from './actions';
import {map, switchMap, catchError} from 'rxjs/operators';
import {of} from 'rxjs';

export const updateLocalProfile: Epic = (
  action$,
  store: StateObservable<AppState>,
  {userRepository}: {userRepository: UserRepository},
) =>
  action$.pipe(
    ofType(UPDATE_LOCAL_PROFILE),
    switchMap(action =>
      userRepository
        .updateLocalProfile(action.payload)
        .pipe(map(() => updateLocalProfileSuccess()),
        catchError(error => of(UpdateLocalProfileFailed(error)))
        )
    ),
  );
