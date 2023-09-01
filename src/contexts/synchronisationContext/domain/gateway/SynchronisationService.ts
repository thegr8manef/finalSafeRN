import { Observable } from 'rxjs';
import { Site } from '@contexts/visiteContext/domain/entity/Site';
import { Synchronisation } from '../entity/Synchronisation';
import { Accompagnant } from '@contexts/visiteContext/domain/entity/Accompagnant';

export interface LoadDataResponse {
  chanties: Site[];
  accompagnant: Accompagnant[];
}

export interface SynchronisationService {
  loadData(accessToken: string, lastUpdateDate: string): Observable<LoadDataResponse>;
  sendData(accessToken: string,
    lastUpadet: string,
    synchronisation: Synchronisation): Observable<void>
}
