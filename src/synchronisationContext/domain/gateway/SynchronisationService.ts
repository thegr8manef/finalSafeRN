import {Observable} from 'rxjs';
import {Site} from '../../../visiteContext/domain/entity/Site';

export interface SynchronisationService {
  loadData(accessToken: string, lastUpadet: string): Observable<Site[]>;
}
