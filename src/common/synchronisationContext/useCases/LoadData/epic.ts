import {Epic, StateObservable, ofType} from 'redux-observable';
import {AppState} from '../../../../redux_configuration/appState';
import {SynchronisationService} from '../../domain/gateway/SynchronisationService';
import {LOAD_DATA} from './actionTypes';
import {concatMap, switchMap, mergeMap} from 'rxjs/operators';
import {Chantier} from '../../../adapters/secondaries/db/entity/Chantier';
import {loadDataSuccess} from './actions';
import {saveData} from '../SaveInLocal/actions';
import {SynchronisationRepositoryIDAO} from '../../domain/gateway/SynchronisationRepositoryIDAO';

export const loadDataEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {
    synchronisationService,
    synchronisationRepository,
  }: {
    synchronisationService: SynchronisationService;
    synchronisationRepository: SynchronisationRepositoryIDAO;
  },
) =>
  action$.pipe(
    ofType(LOAD_DATA),
    switchMap(action =>
      synchronisationRepository.loadLastUpdateDate().pipe(
        mergeMap((lastUpadet: string) =>
          synchronisationService.loadData(lastUpadet).pipe(
            concatMap((chanties: Chantier[]) => {
              return [loadDataSuccess(), saveData(chanties)];
            }),
          ),
        ),
      ),
    ),
  );
