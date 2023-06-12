import {Epic, ofType, StateObservable} from 'redux-observable';
import {AppState} from '../../../redux_configuration/appState';
import {LOAD_STAT} from './actionTypes';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {DashboardService} from '../../domain/gateway/dashboardService';
import {statFailed, statSuccess} from './action';
import {Stat} from '../../domain/entity/Stat';

export const statEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {dashboardService}: {dashboardService: DashboardService},
) =>
  action$.pipe(
    ofType(LOAD_STAT),
    switchMap(() =>
      dashboardService.LoadStat().pipe(
        map((stat: Stat) => {
          return statSuccess(stat);
        }),
        catchError(error => of(statFailed(error))),
      ),
    ),
  );
