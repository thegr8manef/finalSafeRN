import { Epic, ofType, StateObservable } from 'redux-observable';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { LOAD_VISITS } from './actionTypes';
import { AppState } from '@redux/appState';
import { LoadVisitsFailed, LoadVisitsSuccess } from './action';
import { Visit } from '@contexts/visiteContext/domain/entity/Visit';
import { VisitsService } from '@contexts/visiteContext/domain/gateway/visitsService';

export const loadVisitsEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  { visitsService }: { visitsService: VisitsService },
) =>
  action$.pipe(
    ofType(LOAD_VISITS),
    switchMap(() => {
      // Log that the LOAD_VISITS action has been triggered
      return visitsService.loadVisitsDetails().pipe(
        map((data: Visit[]) => {
          // Log the data received from the repository
          return LoadVisitsSuccess(data);
        }),
        catchError(error => {
          // Log the error and dispatch the failure action
          return of(LoadVisitsFailed(error));
        }),
      );
    }),
  );
