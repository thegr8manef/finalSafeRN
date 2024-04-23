import {Epic, ofType, StateObservable} from 'redux-observable';
import {AppState} from '../../../redux_configuration/appState';
import {catchError, concatMap, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {StatisticService} from '../../domain/gateway/statsticService';
import {loadRemoteStatsFailed, loadRemoteStatsSuccess} from './action';
import {Stat} from '../../domain/entity/Stat';
import {saveStats} from '../saveStats/actions';
import {LOAD_REMOTE_STATS} from './actionTypes';

export const loadRemoteStatsEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {statisticService}: {statisticService: StatisticService},
) =>
  action$.pipe(
    ofType(LOAD_REMOTE_STATS),
    switchMap(action =>
      statisticService.loadStatistic(action.payload).pipe(
        concatMap((stat: Stat) => [
          saveStats(stat),
          loadRemoteStatsSuccess(stat),
        ]),
        catchError(error => of(loadRemoteStatsFailed(error))),
      ),
    ),
  );
