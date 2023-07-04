import {AppState} from 'react-native';
import {Epic, ofType, StateObservable} from 'redux-observable';
import {UPDATE_LOCAL_PROFILE} from './actionsTypes';
import {UserService} from '../../domain/gateway/userService';
import {updateLocalProfileSuccess} from './actions';
import {map, switchMap} from 'rxjs/operators';

export const updateLocalProfile: Epic = (
  action$,
  store: StateObservable<AppState>,
  {userServices}: {userServices: UserService},
) =>
  action$.pipe(
    ofType(UPDATE_LOCAL_PROFILE),
    switchMap(action =>
      userServices
        .updateLocalProfile(action.payload)
        .pipe(map(() => updateLocalProfileSuccess())),
    ),
  );
