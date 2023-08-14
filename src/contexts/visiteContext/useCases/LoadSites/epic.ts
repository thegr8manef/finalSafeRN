import {Epic, ofType, StateObservable} from 'redux-observable';
import {LOAD_SITES} from './actionTypes';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {LoadSitesFailed, LoadSitesSuccess} from './action';
import {VisitsService} from '../../domain/gateway/visitsService';
import {Site} from '../../domain/entity/Site';
import {AppState} from "@redux/appState";

export const loadSitesEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {visitsService}: {visitsService: VisitsService},
) =>
  action$.pipe(
    ofType(LOAD_SITES),
    switchMap(() =>
      visitsService.LoadAllSites().pipe(
        map((sites: Site[]) => {
          return LoadSitesSuccess(sites);
        }),
        catchError(error => of(LoadSitesFailed(error))),
      ),
    ),
  );
