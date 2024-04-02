import {Observable} from 'rxjs';
import {Site} from '@contexts/visiteContext/domain/entity/Site';
import {Synchronisation} from '../entity/Synchronisation';
import {Visit} from '@contexts/visiteContext/domain/entity/Visit';
import {Accompagnants} from '@contexts/visiteContext/domain/entity/Accompagnant';

export interface LoadDataResponse {
  chanties: Site[];
  accompagnant: Accompagnants[];
  lastUpdateDate?: string;
}

export interface SynchronisationService {
  loadData(
    accessToken: string,
    lastUpadet: string,
  ): Observable<LoadDataResponse>;

  sendData(
    accessToken: string,
    lastUpadet: string,
    visits: Visit[],
  ): Observable<void>;
}
