import {Epic, StateObservable, ofType} from 'redux-observable';
import {AppState} from '../../../redux_configuration/appState';
import {SynchronisationService} from '../../domain/gateway/SynchronisationService';
import {LOAD_DATA} from './actionTypes';
import {map, switchMap, mergeMap, catchError} from 'rxjs/operators';
import {Chantier} from '../../../common/adapters/secondaries/db/entity/Chantier';
import {loadDataFailed, loadDataSuccess} from './actions';
import {of} from 'rxjs';
import {SynchronisationRepository} from '../../domain/gateway/SynchronisationRepository';

export const loadDataEpic: Epic = (
  action$,
  store: StateObservable<AppState>,
  {
    synchronisationService,
    synchronisationRepository,
  }: {
    synchronisationService: SynchronisationService;
    synchronisationRepository: SynchronisationRepository;
  },
) =>
  action$.pipe(
    ofType(LOAD_DATA),
    switchMap(action =>
      synchronisationRepository.loadLastUpdateDate().pipe(
        mergeMap((lastUpdateDate: string) =>
          synchronisationService.loadData(action.payload, lastUpdateDate).pipe(
            mergeMap((chanties: Chantier[]) =>
              synchronisationRepository.saveData(chanties).pipe(
                map(() => loadDataSuccess()),
                catchError(error => of(loadDataFailed(error))),
              ),
            ),
            catchError(error => of(loadDataFailed(error))),
          ),
        ),
        catchError(error => of(loadDataFailed(error))),
      ),
    ),
  );
