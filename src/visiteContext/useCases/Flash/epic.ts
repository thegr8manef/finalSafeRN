import {Epic, ofType, StateObservable} from 'redux-observable';
import {AppState} from '../../../redux_configuration/appState';
import {SAVE_FLASH} from './actionTypes';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {flashFailed, SaveFlash,flashSuccess} from './action';
import {Flash} from '../../domain/entity/Flash';
import {VisitsService} from '../../domain/gateway/visitsService';

export const VisitFlashEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {visitsService}: {visitsService: VisitsService},
) =>
  action$.pipe(
    ofType(SAVE_FLASH),
    switchMap(action =>
      visitsService.SaveFlash(action.payload).pipe(
        map(() => {
          console.log('Save flash success EPIC')
          return flashSuccess(action.payload);
        }),
        catchError(error => of(flashFailed(error))),
      ),
    ),
  );
console.log('epic/out')