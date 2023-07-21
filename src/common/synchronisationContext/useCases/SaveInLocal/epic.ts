import {Epic, StateObservable, ofType} from 'redux-observable';
import {AppState} from '../../../../redux_configuration/appState';
import {map, switchMap} from 'rxjs/operators';
import {SAVE_DATA} from './actionTypes';
import {saveDataSuccess} from './actions';
import {SynchronisationRepository} from '../../adapters/secandaires/SynchronisationRepository';

export const saveDataEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {
    synchronisationRepository,
  }: {synchronisationRepository: SynchronisationRepository},
) =>
  action$.pipe(
    ofType(SAVE_DATA),
    switchMap(action =>
      synchronisationRepository
        .saveData(action.payload)
        .pipe(map(() => saveDataSuccess())),
    ),
  );
