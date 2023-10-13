import { Epic, ofType, StateObservable } from 'redux-observable';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { AppState } from '@redux/appState';

import { Visit } from '@contexts/visiteContext/domain/entity/Visit';
import { VisitsService } from '@contexts/visiteContext/domain/gateway/visitsService';
import Remarque from '@contexts/visiteContext/domain/entity/Remarque';
import { VisitFlash } from '@contexts/visiteContext/domain/entity/VisitFlash';
import { LOAD_FLASH } from './actionTypes';
import { LoadFlashFailed, LoadFlashSuccess } from './action';

export const loadFlashEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  { visitsService }: { visitsService: VisitsService },
) =>
  action$.pipe(
    ofType(LOAD_FLASH),
    switchMap(() => {
      // Log that the LOAD_VISITS action has been triggered
      return visitsService.loadFlashsDetails().pipe(
        map((data: VisitFlash[]) => {
          // Log the data received from the repository
          return LoadFlashSuccess(data);
        }),
        catchError(error => {
          // Log the error and dispatch the failure action
          return of(LoadFlashFailed(error));
        }),
      );
    }),
  );
