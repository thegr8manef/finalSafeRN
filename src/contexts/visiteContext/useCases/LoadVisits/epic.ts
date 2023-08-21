import { Epic, ofType, StateObservable } from 'redux-observable';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { LOAD_VISITS } from './actionTypes';
import { VisitsRepository } from '@contexts/visiteContext/domain/gateway/visitsRepository';
import { AppState } from '@redux/appState';
import { LoadVisitsFailed, LoadVisitsSuccess } from './action';
import { Visit } from '@contexts/visiteContext/domain/entity/Visit';

export const loadVisitsEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  { visitRepository }: { visitRepository: VisitsRepository },
) =>
  action$.pipe(
    ofType(LOAD_VISITS),
    switchMap(() => {
      console.log("LOAD_VISITS action triggered"); // Add this log statement

      return visitRepository.loadVisitsDetails().pipe(
        map((data: Visit[]) => {
          console.log("Visits loaded successfully:", data); // Add this log statement
          return LoadVisitsSuccess(data);
        }),
        catchError(error => {
          console.error("Error loading visits:", error); // Add this error log statement
          return of(LoadVisitsFailed(error));
        }),
      );
    }),
  );
