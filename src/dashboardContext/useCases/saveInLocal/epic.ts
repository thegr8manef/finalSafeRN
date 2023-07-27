import {Epic, StateObservable, ofType} from 'redux-observable';
import {AppState} from '../../../redux_configuration/appState';
import {SAVE_STAT} from './actionTypes';
import {map, switchMap} from 'rxjs/operators';
import {DBStatRepository} from '../../domain/gateway/DBStatRepository';
import {loadLocalStat} from '../LoadLocalStat/actions';

export const saveStatInLocal: Epic = (
  action$,
  store: StateObservable<AppState>,
  {stateRepository}: {stateRepository: DBStatRepository},
) =>
  action$.pipe(
    ofType(SAVE_STAT),
    switchMap(action =>
      stateRepository
        .saveStatInLocal(action.payload)
        .pipe(map(() => loadLocalStat())),
    ),
  );
