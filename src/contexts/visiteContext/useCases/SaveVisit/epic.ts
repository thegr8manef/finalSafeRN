import { Epic, ofType, StateObservable } from 'redux-observable';
import { SAVE_VISIT } from './actionTypes';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SaveVisitFailed, SaveVisitSuccess } from './action';
import { AppState } from '@redux/appState';
import { VisitsService } from '@contexts/visiteContext/domain/gateway/visitsService';

export const saveVisitEpic: Epic = (
    action$,
    store: StateObservable<AppState>,
    { visitsService }: { visitsService: VisitsService },
) =>
    action$.pipe(
        ofType(SAVE_VISIT),
        switchMap(action => {
            // Log the action and store state if needed
            return visitsService.SaveVisit(action.payload).pipe(
                map(() => {
                    // Log a success message
                    // Dispatch the success action
                    return SaveVisitSuccess();
                }),
                catchError(error => {
                    // Log the error and dispatch the failure action
                    return of(SaveVisitFailed(error));
                }),
            );
        }),
    );
