import {Observable} from 'rxjs';
import {Site} from '@contexts/visiteContext/domain/entity/Site';

export interface SynchronisationRepository {
  saveData(sites: Site[]): Observable<void>;
  loadLastUpdateDate(): Observable<string>;
}
