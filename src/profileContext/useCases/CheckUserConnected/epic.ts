import {Epic, ofType, StateObservable} from 'redux-observable';
import {AppState} from '../../../redux_configuration/appState';
import {map, switchMap} from 'rxjs/operators';
import {delay} from 'rxjs';
import {UserService} from '../../domain/gateway/userService';
import {CHECK_USER_CONNECTED} from './actionTypes';
import {checkUserConnected, checkUserConnectedSuccess} from './actions';

export const checkUserEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {userServices}: {userServices: UserService},
) =>
  action$.pipe(
    ofType(CHECK_USER_CONNECTED),
    switchMap(action =>
      userServices
        .checkUserConnected()
        .pipe(
          map((ifConnected: boolean) => checkUserConnectedSuccess(ifConnected)),
        ),
    ),
  );
