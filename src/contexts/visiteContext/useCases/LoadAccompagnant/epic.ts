import {Epic, ofType, StateObservable} from 'redux-observable';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {VisitsService} from '../../domain/gateway/visitsService';
import {AppState} from "@redux/appState";
import { LOAD_ACCOMPAGNANTS } from './actionType';
import { Accompagnant } from '@contexts/visiteContext/domain/entity/Accompagnant';
import { LoadAccompagnantsFailed, LoadAccompagnantsSuccess } from './actions';

export const loadAccompagnantsEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {visitsService}: {visitsService: VisitsService},
) =>
  action$.pipe(
    ofType(LOAD_ACCOMPAGNANTS),
    switchMap(() =>
      visitsService.loadAccompagnants().pipe(
        map((Accompagnant: Accompagnant[]) => {
          return LoadAccompagnantsSuccess(Accompagnant);
        }),
        catchError(error => of(LoadAccompagnantsFailed(error))),
      ),
    ),
  );
