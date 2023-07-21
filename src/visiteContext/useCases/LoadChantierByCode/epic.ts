import {Epic, ofType, StateObservable} from 'redux-observable';
import {AppState} from '../../../redux_configuration/appState';
import {LOAD_CHANTIER_BY_CODE} from './actionTypes';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {
  LoadChantierByCodeFailed,
  LoadChantierByCode,
  LoadChantierByCodeSuccess,
} from './action';
import {VisitsService} from '../../domain/gateway/visitsService';
import {Chantier} from '../../domain/entity/Chantier';

export const LoadChantierEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {visitsService}: {visitsService: VisitsService},
) =>
  action$.pipe(
    ofType(LOAD_CHANTIER_BY_CODE),
    switchMap(action =>
      visitsService.LoadChantierByCode(action.payload).pipe(
        map((chantier: Chantier) => {
          return LoadChantierByCodeSuccess(action.payload);
        }),
        catchError(error => of(LoadChantierByCodeFailed(error))),
      ),
    ),
  );
