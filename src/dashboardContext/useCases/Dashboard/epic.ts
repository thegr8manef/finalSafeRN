import {Epic, ofType, StateObservable} from 'redux-observable';
import {AppState} from '../../../redux_configuration/appState';
import {LOAD_STAT} from './actionTypes';
import {catchError, concatMap, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {DashboardService} from '../../domain/gateway/dashboardService';
import {statFailed, statSuccess} from './action';
import {Stat} from '../../domain/entity/Stat';
import {StatDto} from '../../adapters/secondaires/dto/stat.dto';
import {SaveStat} from '../saveInLocal/actions';

export const statEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {dashboardService}: {dashboardService: DashboardService},
) =>
  action$.pipe(
    ofType(LOAD_STAT),
    switchMap(() =>
      dashboardService.LoadStat().pipe(
        concatMap((dtoStat: StatDto) => {
          return [SaveStat(dtoStat)];
        }),
        catchError(error => of(statFailed(error))),
      ),
    ),
  );
