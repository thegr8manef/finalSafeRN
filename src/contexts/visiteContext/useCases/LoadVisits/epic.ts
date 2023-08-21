import { Epic, ofType, StateObservable } from 'redux-observable';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { LOAD_VISITS } from './actionTypes';
import { VisitsRepository } from '@contexts/visiteContext/domain/gateway/visitsRepository';
import { AppState } from '@redux/appState';
import { LoadVisitsFailed, LoadVisitsSuccess } from './action';
import { Visits } from '@contexts/visiteContext/domain/entity/Visits';

export const loadVisitsEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  { visitRepository }: { visitRepository: VisitsRepository },
) =>
  action$.pipe(
    ofType(LOAD_VISITS),
    switchMap(() =>
      visitRepository.loadVisitsDetails().pipe(
        map((data: Visits[]) => LoadVisitsSuccess(data)),
        catchError(error => of(LoadVisitsFailed(error))),
      ),
    ),
  );
