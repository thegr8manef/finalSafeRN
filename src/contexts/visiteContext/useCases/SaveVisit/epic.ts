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
        switchMap(action => {
            // Log the action and store state if needed
            console.log('Action:', action);
            console.log('Store State:', store.value);

            return visitsService.SaveVisit(action.payload).pipe(
                map(() => {
                    // Log a success message
                    console.log('SaveVisitSuccess');

                    // Dispatch the success action
                    return SaveVisitSuccess();
                }),
                catchError(error => {
                    // Log the error and dispatch the failure action
                    console.error('SaveVisitFailed:', error);
                    return of(SaveVisitFailed(error));
                }),
            );
        }),
    );
