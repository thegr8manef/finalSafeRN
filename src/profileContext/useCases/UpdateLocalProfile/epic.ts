import {AppState} from 'react-native';
import {Epic, ofType, StateObservable} from 'redux-observable';
import {UPDATE_LOCAL_PROFILE} from './actionsTypes';
import {UserRepository} from '../../domain/gateway/userReposiory';
import {updateLocalProfileSuccess} from './actions';
import {map, switchMap} from 'rxjs/operators';

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
        .pipe(map(() => updateLocalProfileSuccess())),
    ),
  );
