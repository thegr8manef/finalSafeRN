import {Epic, ofType, StateObservable} from 'redux-observable';
import {AppState} from '../../../redux_configuration/appState';
import {SEARCH_CHANTIER} from './actionTypes';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {
  SearchChantierFailed,
  SearchChantier,
  SearchChantierSuccess,
} from './action';
import {VisitsService} from '../../domain/gateway/visitsService';

export const SearchChantierEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {visitsService}: {visitsService: VisitsService},
) =>
  action$.pipe(
    ofType(SEARCH_CHANTIER),
    switchMap(action =>
      visitsService.SearchChantier(action.payload).pipe(
        map(() => {
          return SearchChantierSuccess(action.payload);
        }),
        catchError(error => of(SearchChantierFailed(error))),
      ),
    ),
  );
