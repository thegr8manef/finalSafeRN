import {Epic, StateObservable, ofType} from 'redux-observable';
import {AppState} from '../../../../redux_configuration/appState';
import {LOAD_CONNECTION_STATUS} from './actionTypes';
import {map, switchMap} from 'rxjs/operators';
import {loadConnectionStatusSuccess} from './actions';
import {ConnectionRepository} from '../../domain/gateway/ConnectionRepository';

export const loadConnectionStatEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {connectionRepository}: {connectionRepository: ConnectionRepository},
) =>
  action$.pipe(
    ofType(LOAD_CONNECTION_STATUS),
    switchMap(() =>
      connectionRepository
        .loadConnectionStatus()
        .pipe(
          map((isConnected: boolean) =>
            loadConnectionStatusSuccess(isConnected),
          ),
        ),
    ),
  );
