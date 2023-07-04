import {Epic, ofType, StateObservable} from 'redux-observable';
import {AppState} from '../../../redux_configuration/appState';
import {SAVE_FLASH} from './actionTypes';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {flashFailed, SaveFlash} from './action';
import {Flash} from '../../domain/entity/Flash';
import {VisitsService} from '../../domain/gateway/visitsService';

export const VisitFlashEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {dbVisitsService}: {dbVisitsService: VisitsService},
) =>
  action$.pipe(
    ofType(SAVE_FLASH),
    switchMap(action =>
    dbVisitsService.SaveFlash(action.payload).pipe(
        map(() => 
           SaveFlash(action.payload)
        ),
        catchError(error => of(flashFailed(error))),
      ),
    ),
  );
