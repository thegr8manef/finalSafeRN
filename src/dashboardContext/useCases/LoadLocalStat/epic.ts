import {Epic, StateObservable, ofType} from 'redux-observable';
import {AppState} from '../../../redux_configuration/appState';

import {map, switchMap} from 'rxjs/operators';
import {DBDashboardService} from '../../domain/gateway/dbDashboardService';
import {LOAD_LOCAL_STAT} from './actionTypes';
import {Stat} from '../../domain/entity/Stat';
import {loadLocalStatSuccess} from './actions';

export const loadLocalStatEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {dbDashboardService}: {dbDashboardService: DBDashboardService},
) =>
  action$.pipe(
    ofType(LOAD_LOCAL_STAT),
    switchMap(action =>
      dbDashboardService
        .loadStatFomLocal()
        .pipe(map((stat: Stat) => loadLocalStatSuccess(stat))),
    ),
  );
