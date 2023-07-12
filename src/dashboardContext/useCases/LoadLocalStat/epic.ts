import {Epic, StateObservable, ofType} from 'redux-observable';
import {AppState} from '../../../redux_configuration/appState';

import {map, switchMap} from 'rxjs/operators';
import {LOAD_LOCAL_STAT} from './actionTypes';
import {Stat} from '../../domain/entity/Stat';
import {loadLocalStatSuccess} from './actions';
import {DBStatRepository} from '../../domain/gateway/DBStatRepository';

export const loadLocalStatEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {stateRepository}: {stateRepository: DBStatRepository},
) =>
  action$.pipe(
    ofType(LOAD_LOCAL_STAT),
    switchMap(action =>
      stateRepository
        .loadStatFomLocal()
        .pipe(map((stat: Stat) => loadLocalStatSuccess(stat))),
    ),
  );
