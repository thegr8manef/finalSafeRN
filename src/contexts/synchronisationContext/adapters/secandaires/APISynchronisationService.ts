import {Observable, throwError} from 'rxjs';
import {SynchronisationService} from '../../domain/gateway/SynchronisationService';
import {ObservableAjaxHttpClient} from '@common/adapters/secondaries/real/observableAjaxHttpClient';
import {SynchronisationDto} from './dto/synchronisationDto';
import {SynchronisationMapper} from './mapper/synchronisationMapper';
import {catchError, map} from 'rxjs/operators';
import constants from '@common/constants';
import {Site} from '@contexts/visiteContext/domain/entity/Site';
import ws from '@config/ws';
import { VisitSynchronisation } from '@contexts/synchronisationContext/domain/entity/VisitSynchronisation';
import { Synchronisation } from '@contexts/synchronisationContext/domain/entity/Synchronisation';
import { Visit } from '@contexts/visiteContext/domain/entity/Visit';

export class APISynchronisationService implements SynchronisationService {
  loadData(accessToken: string, lastUpdateDate: string): Observable<Site[]> {
    const _headers: Record<string, string> = {
      'Content-Type': 'application/json',
      //  'token': accessToken
      /**
       * We are using a static token because we don't have access to FinalSafe msal
       */
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
        map(response =>
          SynchronisationMapper.mapperToChanties(response.response),
        ),
        catchError(err => throwError(err)),
      );
  }

 
  sendData(accessToken: string, lastUpadet: string, visits: Visit[]): Observable<void> {
    console.log(JSON.stringify(SynchronisationMapper.mapperToSynchronisationSend(visits)))

    const _headers: Record<string, string> = {

      'Content-Type': 'application/json',
      token: accessToken
    };
    const body: Record<string, string> = {
      lu: lastUpadet,
      dt : JSON.stringify(SynchronisationMapper.mapperToSynchronisationSend(visits))
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
