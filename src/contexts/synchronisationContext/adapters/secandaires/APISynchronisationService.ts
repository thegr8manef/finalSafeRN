import { Observable, throwError } from 'rxjs';
import { LoadDataResponse, SynchronisationService } from '../../domain/gateway/SynchronisationService';
import { ObservableAjaxHttpClient } from '@common/adapters/secondaries/real/observableAjaxHttpClient';
import { SynchronisationDto } from './dto/synchronisationDto';
import { SynchronisationMapper } from './mapper/synchronisationMapper';
import { catchError, map } from 'rxjs/operators';
import constants from '@common/constants';
import { Site } from '@contexts/visiteContext/domain/entity/Site';
import ws from '@config/ws';
import { Synchronisation } from '@contexts/synchronisationContext/domain/entity/Synchronisation';
import { Visit } from '@contexts/visiteContext/domain/entity/Visit';
import { Accompagnant } from '@contexts/visiteContext/domain/entity/Accompagnant';


export class APISynchronisationService implements SynchronisationService {

  loadData(accessToken: string, lastUpdateDate: string): Observable<LoadDataResponse> {

    const _headers: Record<string, string> = {
      'Content-Type': 'application/json',
      token: constants.accessToken,
    };

    const body: Record<string, string> = {
      lu: lastUpdateDate,
      lut: '-1',
      lur: '-1',
      luqc: '-1',
      luqh: '-1',
    };

    const URL = ws.baseUrl + 'synchronization';

    return new ObservableAjaxHttpClient()
    .post<SynchronisationDto>(URL, body, _headers)
      .pipe(
        map(response => {
          const chanties: Site[] = SynchronisationMapper.mapperToChanties(response.response);
          const accompagnant: Accompagnant[] = SynchronisationMapper.mapperToAccompangnant(response.response);

          const loadDataResponse: LoadDataResponse = {
            chanties,
            accompagnant,
          };

          return loadDataResponse;
        }),
        catchError(err => {
          // Log errors
          return throwError(err);
        })
      );
  }

  sendData(accessToken: string, lastUpadet: string, visits: Visit[]): Observable<void> {
    const _headers: Record<string, string> = {

      'Content-Type': 'application/json',
      token: accessToken
    };
    const body: Record<string, string> = {
      lu: lastUpadet,
      dt : JSON.stringify(SynchronisationMapper.mapToRemoteVisitDto(visits))
    };

    const URL = ws.baseUrl + 'synchronization';
    return new ObservableAjaxHttpClient()
      .put<SynchronisationDto>(URL, body, _headers)
      .pipe(
        map(response =>
          response.response
        ),
        catchError(err => throwError(err)),
      );
  }

}
