import {Epic, ofType, StateObservable} from 'redux-observable';
import {AppState} from '../../../redux_configuration/appState';
import {map, switchMap} from 'rxjs/operators';
import {UserRepository} from '../../domain/gateway/userReposiory';
import {CHECK_USER_CONNECTED} from './actionTypes';
import {checkUserConnectedSuccess} from './actions';

export const checkUserEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {userRepository}: {userRepository: UserRepository},
) =>
  action$.pipe(
    ofType(CHECK_USER_CONNECTED),
    switchMap(() =>
      userRepository
        .checkUserConnected()
        .pipe(
          map((isConnected: boolean) => checkUserConnectedSuccess(isConnected)),
        ),
    ),
  );
