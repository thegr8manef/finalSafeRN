import {Observable, throwError, of} from 'rxjs';
import {Chantier} from '../../../adapters/secondaries/db/entity/Chantier';
import {SynchronisationService} from '../../domain/gateway/SynchronisationService';
import ws from '../../../../config/ws';
import {ObservableAjaxHttpClient} from '../../../adapters/secondaries/real/observableAjaxHttpClient';
import {SynchronisationDto} from './dto/synchronisationDto';
import {SynchronisationMapper} from './mapper/synchronisationMapper';
import {catchError, map, switchMap} from 'rxjs/operators';
import constants from '../../../constants';

export class synchronisationService implements SynchronisationService {
  loadData(lastUpadet: string): Observable<Chantier[]> {
    const _headers: Record<string, string> = {
      'Content-Type': 'application/json',
      //  'token': accessToken
      /**
       * We are using a static token because we don't have access to FinalSafe msal
       */
      token: constants.accessToken,
    };

    const body: Record<string, string> = {
      lu: lastUpadet,
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
}
