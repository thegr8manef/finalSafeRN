import {Epic, ofType, StateObservable} from 'redux-observable';
import {AppState} from '../../../redux_configuration/appState';
import {map, switchMap} from 'rxjs/operators';
import {UserConnectedService} from '../../domain/gateway/userConnectedService';
import {CHECK_USER_CONNECTED} from './actionTypes';
import {checkUserConnected} from './actions';

export const checkUserEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {userServices}: {userServices: UserConnectedService},
) =>
  action$.pipe(
    ofType(CHECK_USER_CONNECTED),
    switchMap(action =>
      userServices
        .checkUserConnected()
        .pipe(map((ifConnected: boolean) => checkUserConnected(ifConnected))),
    ),
  );
