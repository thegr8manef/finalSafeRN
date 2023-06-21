import {Epic, ofType, StateObservable} from 'redux-observable';
import {AppState} from '../../../redux_configuration/appState';
import {map, switchMap} from 'rxjs/operators';
import {UserConnectedService} from '../../domain/gateway/userConnectedService';
import {CHECK_USER_CONNECTED} from './actionTypes';
import {checkUserConnected} from './actions';

export const checkUserEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {checkUserServices}: {checkUserServices: UserConnectedService},
) =>
  action$.pipe(
    ofType(CHECK_USER_CONNECTED),
    switchMap(() =>
      checkUserServices.checkUserConnected().pipe(
        map((ifConnected: boolean) => {
          return checkUserConnected(ifConnected);
        }),
      ),
    ),
  );
