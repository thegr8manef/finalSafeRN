import {Epic, ofType, StateObservable} from 'redux-observable';
import {AppState} from '../../../redux_configuration/appState';
import {map, switchMap,catchError} from 'rxjs/operators';
import {UserRepository} from '../../domain/gateway/userReposiory';
import {SET_USER_CONNECTED} from './actionTypes';
import {setUserConnectedError, setUserConnectedSuccess} from './actions';
import {of} from 'rxjs';

export const setUserEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {userRepository}: {userRepository: UserRepository},
) =>
  action$.pipe(
    ofType(SET_USER_CONNECTED),
    switchMap(action =>
      userRepository
        .setUserConnected(action.payload)
        .pipe(map(() => setUserConnectedSuccess()),
        catchError(error => of(setUserConnectedError(error)))
        ),
    ),   
  );
