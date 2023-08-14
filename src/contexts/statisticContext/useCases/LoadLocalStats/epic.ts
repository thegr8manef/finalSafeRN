import {Epic, StateObservable, ofType} from 'redux-observable';
import {AppState} from '../../../redux_configuration/appState';
import {of} from 'rxjs';
import {map, switchMap, catchError} from 'rxjs/operators';
import {Stat} from '../../domain/entity/Stat';
import {loadLocalStatsFailed, loadLocalStatsSuccess} from './actions';
import {StatsRepository} from '../../domain/gateway/statsRepository';
import {LOAD_LOCAL_STATS} from './actionTypes';

export const loadLocalStatsEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {statsRepository}: {statsRepository: StatsRepository},
) =>
  action$.pipe(
    ofType(LOAD_LOCAL_STATS),
    switchMap(() =>
      statsRepository.loadLocalStats().pipe(
        map((stat: Stat) => loadLocalStatsSuccess(stat)),
        catchError(error => of(loadLocalStatsFailed(error))),
      ),
    ),
  );
