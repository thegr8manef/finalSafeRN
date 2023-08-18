import {Epic, ofType, StateObservable} from 'redux-observable';
import {SAVE_FLASH} from './actionTypes';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {SaveFlashFailed, SaveFlashSuccess} from './action';
import {VisitsService} from '../../domain/gateway/visitsService';
import { AppState } from '@redux/appState';

export const saveVisitFlashEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {visitsService}: {visitsService: VisitsService},
) =>
  action$.pipe(
    ofType(SAVE_FLASH),
    switchMap(action =>
      visitsService.SaveFlash(action.payload).pipe(
        map(() => SaveFlashSuccess()),
        catchError(error => of(SaveFlashFailed(error))),
      ),
    ),
  );
