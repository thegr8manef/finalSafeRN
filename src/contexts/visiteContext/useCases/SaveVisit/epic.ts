import { Epic, ofType, StateObservable } from 'redux-observable';
import { SAVE_VISIT } from './actionTypes';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SaveVisitFailed, SaveVisitSuccess } from './action';
import { VisitsService } from '../../domain/gateway/visitsService';
import { AppState } from '@redux/appState';

export const saveVisitEpic: Epic = (
    action$,
    store: StateObservable<AppState>,
    { visitsService }: { visitsService: VisitsService },
) =>
    action$.pipe(
        ofType(SAVE_VISIT),
        switchMap(action =>
            visitsService.SaveVisit(action.payload).pipe(
                map(() => SaveVisitSuccess()),
                catchError(error => of(SaveVisitFailed(error))),
            ),
        ),
    );
