import {Epic, StateObservable, ofType} from 'redux-observable';
import {AppState} from '../../../../redux_configuration/appState';
import {SynchronisationService} from '../../domain/gateway/SynchronisationService';
import {LOAD_DATA} from './actionTypes';
import {concatMap, switchMap} from 'rxjs/operators';
import {Chantier} from '../../../adapters/secondaries/db/entity/Chantier';
import {loadDataSuccess} from './actions';
import {saveData} from '../SynchronisationSave/actions';

export const loadDataEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {synchronisationService}: {synchronisationService: SynchronisationService},
) =>
  action$.pipe(
    ofType(LOAD_DATA),
    switchMap(action =>
      synchronisationService.loadData().pipe(
        concatMap((chanties: Chantier[]) => {
          return [loadDataSuccess(), saveData(chanties)];
        }),
      ),
    ),
  );
