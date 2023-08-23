import { Epic, ofType, StateObservable } from 'redux-observable';
import { SAVE_FLASH } from './actionTypes';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SaveFlashFailed, SaveFlashSuccess } from './action';
import { VisitsService } from '../../domain/gateway/visitsService';
import { AppState } from '@redux/appState';

export const saveVisitFlashEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  { visitsService }: { visitsService: VisitsService },
) =>
  action$.pipe(
    ofType(SAVE_FLASH),
    switchMap(action => {
      return visitsService.SaveFlash(action.payload).pipe(
        map(createdRemarque => {
          return SaveFlashSuccess(createdRemarque); // Return the created Remarque with the action
        }),
        catchError(error => {
          return of(SaveFlashFailed(error));
        }),
      );
    }),
  );
