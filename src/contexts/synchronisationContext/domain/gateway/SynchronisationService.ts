import {Observable} from 'rxjs';
import {Site} from '@contexts/visiteContext/domain/entity/Site';
import {Synchronisation} from '../entity/Synchronisation';
import {Accompagnant} from '@contexts/visiteContext/domain/entity/Accompagnant';
import {Visit} from '@contexts/visiteContext/domain/entity/Visit';

export interface LoadDataResponse {
  chanties: Site[];
  accompagnant: Accompagnant[];
  lastUpdateDate?: string;
}

export interface SynchronisationService {
  loadData(accessToken: string, lastUpadet: string): Observable<Site[]>;

  sendData(
    accessToken: string,
    lastUpadet: string,
    visits: Visit[],
  ): Observable<void>;
}
