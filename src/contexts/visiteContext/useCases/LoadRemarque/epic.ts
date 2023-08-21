import {Epic, ofType, StateObservable} from 'redux-observable';
import {LOAD_REMARQUES} from './actionTypes';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {LoadRemarquesFailed, LoadRemarquesSuccess} from './actions';
import {VisitsService} from '../../domain/gateway/visitsService';
import {AppState} from "@redux/appState";
import Remarque from '@contexts/visiteContext/domain/entity/Remarque';

export const loadRemarquesEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {visitsService}: {visitsService: VisitsService},
) =>
  action$.pipe(
    ofType(LOAD_REMARQUES),
    switchMap(() =>
      visitsService.loadRemarques().pipe(
        map((Remarques: Remarque[]) => {
          return LoadRemarquesSuccess(Remarques);
        }),
        catchError(error => of(LoadRemarquesFailed(error))),
      ),
    ),
  );
