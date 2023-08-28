import {Observable} from 'rxjs';
import {Site} from '@contexts/visiteContext/domain/entity/Site';
import { Visit } from '@contexts/visiteContext/domain/entity/Visit';

export interface SynchronisationService {
  
  loadData(accessToken : string, lastUpadet: string): Observable<Site[]>;

  sendData( accessToken: string, 
            lastUpadet : string,
            visits     : Visit[]): Observable<void>
}
