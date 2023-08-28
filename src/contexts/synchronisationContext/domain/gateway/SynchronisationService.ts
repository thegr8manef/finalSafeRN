import {Observable} from 'rxjs';
import {Site} from '@contexts/visiteContext/domain/entity/Site';
import { Synchronisation } from '../entity/Synchronisation';

export interface SynchronisationService {
  loadData(accessToken: string, lastUpadet: string): Observable<Site[]>;
  sendData( accessToken: string, 
            lastUpadet: string,
            synchronisation :Synchronisation): Observable<void>
}
