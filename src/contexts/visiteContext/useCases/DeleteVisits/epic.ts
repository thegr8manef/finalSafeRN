import {Epic, ofType, StateObservable} from 'redux-observable';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {VisitsService} from '../../domain/gateway/visitsService';
import {AppState} from "@redux/appState";
import Remarque from '@contexts/visiteContext/domain/entity/Remarque';
import { DELETE_VISITS } from './actionTypes';
import { deleteVisitFailed, deleteVisitSuccess } from './actions';

export const deleteVisitEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {visitsService}: {visitsService: VisitsService},
) =>
  action$.pipe(
    ofType(DELETE_VISITS),
    switchMap(() =>
      visitsService.deleteVisits().pipe(
        map(() => {
          return deleteVisitSuccess();
        }),
        catchError(error => of(deleteVisitFailed(error))),
      ),
    ),
  );
