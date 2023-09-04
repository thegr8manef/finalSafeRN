import { Epic, StateObservable, ofType } from 'redux-observable';
import { SynchronisationRepository } from '@contexts/synchronisationContext/domain/gateway/SynchronisationRepository';
import { LoadDataResponse, SynchronisationService } from '@contexts/synchronisationContext/domain/gateway/SynchronisationService';
import { AppState } from '@redux/appState';
import { LOAD_DATA } from './actionTypes';
import { map, switchMap, mergeMap, catchError } from 'rxjs/operators';
import { loadDataFailed, loadDataSuccess } from './actions';
import { of } from 'rxjs';

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
          return synchronisationService.loadData(action.payload, lastUpdateDate).pipe(
            mergeMap((data: LoadDataResponse) => {
              // Use mergeMap to save the data and return the success action
              return synchronisationRepository.saveData(data.chanties).pipe(
                mergeMap(() => {

                  // Now, save accompagnant data
                  return synchronisationRepository.saveAccompagnant(data.accompagnant).pipe(
                    map(() => {
                      return loadDataSuccess();
                    }),
                    catchError(error => {
                      return of(loadDataFailed(error));
                    })
                  );
                }),
                catchError(error => {
                  return of(loadDataFailed(error));
                })
              );
            }),
            catchError(error => {
              return of(loadDataFailed(error));
            })
          );
        }),
        catchError(error => {
          return of(loadDataFailed(error));
        })
      );
    })
  );
