import {Observable} from 'rxjs';
import {Site} from '@contexts/visiteContext/domain/entity/Site';
import { VisitSynchronisation } from '../entity/VisitSynchronisation';

export interface SynchronisationService {
  loadData(accessToken: string, lastUpadet: string): Observable<Site[]>;
  sendData( accessToken: string, 
            lastUpadet: string,
            visitSynchronisation :VisitSynchronisation): Observable<void>
}
