import {Epic, ofType, StateObservable} from 'redux-observable';
import {AppState} from '../../../redux_configuration/appState';
import {map, switchMap} from 'rxjs/operators';
import {UserConnectedService} from '../../domain/gateway/userConnectedService';
import {SET_USER_CONNECTED} from './actionTypes';
import {setUserConnectedSuccess} from './actions';

export const setUserEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {userServices}: {userServices: UserConnectedService},
) =>
  action$.pipe(
    ofType(SET_USER_CONNECTED),
    switchMap(action =>
      userServices
        .setUserConnected(action.payload)
        .pipe(
          map((isComplted: boolean) => setUserConnectedSuccess(isComplted)),
        ),
    ),
  );
