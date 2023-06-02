import {Epic, ofType, StateObservable} from 'redux-observable';
import {AppState} from '../../../redux_configuration/appState';
import {LOAD_FLASH} from './actionTypes';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {flashFailed, flashSuccess} from './action';
import {Flash} from '../../domain/entity/Flash';
import {VisitsService} from '../../domain/gateway/visitsService';

export const VisitFlashEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {visitsService}: {visitsService: VisitsService},
) =>
  action$.pipe(
    ofType(LOAD_FLASH),
    switchMap(() =>
      visitsService.LoadFlash().pipe(
        map((flash: Flash) => {
          return flashSuccess(flash);
        }),
        catchError(error => of(flashFailed(error))),
      ),
    ),
  );
