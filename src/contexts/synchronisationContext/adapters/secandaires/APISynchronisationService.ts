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

 
  sendData(accessToken: string, lastUpadet: string, visitSynchronisation: VisitSynchronisation): Observable<void> {

    const st = {
      "vs":[ 
          {"tp":3,
          "tk":"e8d6340b-36bf-4a51-bda1-ceuu9343428c74an169235335g9282",
          "cdcs":"99E898E8",
          "dt":"2023\/08\/18 10:09:19",
          "rq":{
              "dt":"2023\/08\/18 10:09:39",
              "ds":"vfverf",
              "tk":"3d675012-bb03-440b-9e1b-a7282uu038d5ddagn1692353359282",
              "lvl":3,
              "nt":0,
              "md":[]
              }
         }
           ],
       "rkl": []
      }
    const _headers: Record<string, string> = {
      'Content-Type': 'application/json',
      //  'token': accessToken
      /**
       * We are using a static token because we don't have access to FinalSafe msal
       */
      token: constants.accessToken
    };
    const body: Record<string, string> = {
      lu: lastUpadet,
      dt : JSON.stringify(st)
    };

    const URL = ws.baseUrl + 'synchronization';

    return new ObservableAjaxHttpClient()
      .put<SynchronisationDto>(URL, body, _headers)
      .pipe(
        map(response =>
          response.response,
        ),
        catchError(err => throwError(err)),
      );
  }

}
