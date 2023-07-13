import {Epic, StateObservable, ofType} from 'redux-observable';
import {AppState} from '../../../../redux_configuration/appState';
import {LOAD_CONNECTION_STATE} from './actionTypes';
import {map, switchMap} from 'rxjs/operators';
import {loadConnectionStatSuccess} from './actions';
import {ConnectionRepository} from '../../domain/geteway/ConnectionRepository';

export const loadConnectionStatEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {connectionRepository}: {connectionRepository: ConnectionRepository},
) =>
  action$.pipe(
    ofType(LOAD_CONNECTION_STATE),
    switchMap(() =>
      connectionRepository
        .loadConnectionState()
        .pipe(
          map((isConnected: boolean) => loadConnectionStatSuccess(isConnected)),
        ),
    ),
  );
