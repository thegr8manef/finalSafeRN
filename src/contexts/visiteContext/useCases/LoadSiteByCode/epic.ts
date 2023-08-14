import {Epic, ofType, StateObservable} from 'redux-observable';
import {AppState} from '../../../redux_configuration/appState';
import {LOAD_SITE_BY_CODE} from './actionTypes';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {LoadSiteByCodeFailed, LoadSiteByCodeSuccess} from './action';
import {VisitsService} from '../../domain/gateway/visitsService';
import {Site} from '../../domain/entity/Site';

export const loadSiteEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {visitsService}: {visitsService: VisitsService},
) =>
  action$.pipe(
    ofType(LOAD_SITE_BY_CODE),
    switchMap(action =>
      visitsService.LoadSiteByCode(action.payload).pipe(
        map((site: Site) => {
          return LoadSiteByCodeSuccess(site);
        }),
        catchError(error => of(LoadSiteByCodeFailed(error))),
      ),
    ),
  );
