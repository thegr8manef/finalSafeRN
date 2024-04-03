import {Epic, StateObservable, ofType} from 'redux-observable';
import {SynchronisationRepository} from '@contexts/synchronisationContext/domain/gateway/SynchronisationRepository';
import {
  LoadDataResponse,
  SynchronisationService,
} from '@contexts/synchronisationContext/domain/gateway/SynchronisationService';
import {AppState} from '@redux/appState';
import {LOAD_DATA} from './actionTypes';
import {map, concatMap, switchMap, mergeMap, catchError} from 'rxjs/operators';
import {loadDataFailed, loadDataSuccess} from './actions';
import {of} from 'rxjs';
import {updateLocalProfile} from '@contexts/profileContext/useCases/UpdateLocalProfile/actions';
import {User} from '@contexts/profileContext/domain/entity/user';

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
    switchMap(action => {
      return synchronisationRepository.loadLastUpdateDate().pipe(
        mergeMap((lastUpdateDate: string) => {
          return synchronisationService
            .loadData(action.payload, lastUpdateDate)
            .pipe(
              mergeMap((data: LoadDataResponse) => {
                return synchronisationRepository.saveData(data.chanties).pipe(
                  mergeMap(() => {
                    // Now, save accompagnant data
                    return synchronisationRepository
                      .saveAccompagnant(data.accompagnant)
                      .pipe(
                        concatMap(() => [
                          loadDataSuccess(),
                          updateLocalProfile(
                            new User('', '', data.lastUpdateDate!!),
                          ),
                        ]),
                        catchError(error => {
                          return of(loadDataFailed(error));
                        }),
                      );
                  }),
                  catchError(error => {
                    return of(loadDataFailed(error));
                  }),
                );
              }),
              catchError(error => {
                return of(loadDataFailed(error));
              }),
            );
        }),
        catchError(error => {
          return of(loadDataFailed(error));
        }),
      );
    }),
  );
