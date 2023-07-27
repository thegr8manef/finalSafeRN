import {Observable} from 'rxjs';
import {Chantier} from '../../../common/adapters/secondaries/db/entity/Chantier';

export interface SynchronisationService {
  loadData(accessToken: string, lastUpadet: string): Observable<Chantier[]>;
}
