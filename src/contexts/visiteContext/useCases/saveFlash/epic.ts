import { Epic, ofType, StateObservable } from 'redux-observable';
import { SAVE_FLASH } from './actionTypes';
import { catchError, switchMap, concatMap } from 'rxjs/operators'; // Add concatMap import
import { of } from 'rxjs';
import { SaveFlashFailed, SaveFlashSuccess } from './action'; // Add SaveVisit import
import { VisitsService } from '../../domain/gateway/visitsService';
import { AppState } from '@redux/appState';
import { SaveVisit } from '../SaveVisit/action';
import { LoadVisits } from '../LoadVisits/action';

export const saveVisitFlashEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  { visitsService }: { visitsService: VisitsService },
) =>
  action$.pipe(
    ofType(SAVE_FLASH),
    switchMap(action => {
      return visitsService.SaveFlash(action.payload).pipe(
        concatMap(createdRemarque => {
          // Fix the bracket placement here
          return [SaveFlashSuccess(), SaveVisit(createdRemarque), LoadVisits()]; // Return the created Remarque with the action
        }),
        catchError(error => {
          return of(SaveFlashFailed(error));
        })
      );
    })
  );
