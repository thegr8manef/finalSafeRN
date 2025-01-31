import {AppState} from '@redux/appState';
import {Epic, StateObservable, ofType} from 'redux-observable';
import {switchMap, mergeMap, concatMap, catchError} from 'rxjs/operators';
import {SynchronisationService} from '../../domain/gateway/SynchronisationService';
import {SynchronisationRepository} from '../../domain/gateway/SynchronisationRepository';
import {SEND_DATA} from './actionTypes';
import {sendDataFailed, sendDataSucccess} from './actions';
import {of} from 'rxjs';
import {loadData} from '../LoadData/actions';
import {deleteVisit} from '@contexts/visiteContext/useCases/DeleteVisits/actions';
import {LoadSites} from '@contexts/visiteContext/useCases/LoadSites/action';
import {LoadVisits} from '@contexts/visiteContext/useCases/LoadVisits/action';
import {LoadFlash} from '@contexts/visiteContext/useCases/LoadFlash/action';

export const sendDataEpic: Epic = (
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
    ofType(SEND_DATA),
    switchMap(action =>
      synchronisationRepository.loadLastUpdateDate().pipe(
        mergeMap((lastUpdate: string) =>
          synchronisationService
            .sendData(
              action.payload.accessToken,
              lastUpdate,
              action.payload.visits,
            )
            .pipe(
              concatMap(() => [
                sendDataSucccess(),
                loadData(action.payload.accessToken, lastUpdate),
                deleteVisit(),
                LoadVisits(),
                LoadFlash(),
              ]),
              catchError(error => of(sendDataFailed(error))),
            ),
        ),
        catchError(error => of(sendDataFailed(error))),
      ),
    ),
  );
