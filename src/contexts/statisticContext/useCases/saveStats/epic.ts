import {Epic, StateObservable, ofType} from 'redux-observable';
import {AppState} from '../../../redux_configuration/appState';
import {SAVE_STATS} from './actionTypes';
import {concatMap, switchMap, catchError} from 'rxjs/operators';
import {StatsRepository} from '../../domain/gateway/statsRepository';
import {saveStatsFailed, saveStatsSuccess} from './actions';
import {of} from 'rxjs';
import {loadLocalStats} from '../LoadLocalStats/actions';

export const saveStatsEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {statsRepository}: {statsRepository: StatsRepository},
) =>
  action$.pipe(
    ofType(SAVE_STATS),
    switchMap(action =>
      statsRepository.saveStats(action.payload).pipe(
        concatMap(() => [loadLocalStats(), saveStatsSuccess()]),
        catchError(error => of(saveStatsFailed(error))),
      ),
    ),
  );
