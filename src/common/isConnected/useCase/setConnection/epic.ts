import {Epic, StateObservable, ofType} from 'redux-observable';
import {AppState} from '../../../../redux_configuration/appState';
import {map, switchMap} from 'rxjs/operators';
import {ConnectionRepository} from '../../domain/geteway/ConnectionRepository';
import {SET_CONNECTION_STATE} from './actionTypes';

export const setConnectionStatEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {connectionRepository}: {connectionRepository: ConnectionRepository},
) =>
  action$.pipe(
    ofType(SET_CONNECTION_STATE),
    switchMap(() =>
      connectionRepository.setConnectionState().pipe(map(() => {})),
    ),
  );
