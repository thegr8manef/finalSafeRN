import {Epic, ofType, StateObservable} from 'redux-observable';
import {AppState} from '../../../redux_configuration/appState';
import {LOAD_CHANTIER_BY_CODE} from './actionTypes';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {LoadChantierFailed, LoadChantier, LoadChantierSuccess} from './action';
import {VisitsService} from '../../domain/gateway/visitsService';

export const LoadChantierEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {visitsService}: {visitsService: VisitsService},
) =>
  action$.pipe(
    ofType(LOAD_CHANTIER_BY_CODE),
    switchMap(action =>
      visitsService.LoadChantier(action.payload).pipe(
        map(() => {
          return LoadChantierSuccess(action.payload);
        }),
        catchError(error => of(LoadChantierFailed(error))),
      ),
    ),
  );
