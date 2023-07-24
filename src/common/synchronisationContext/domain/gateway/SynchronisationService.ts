import {Observable} from 'rxjs';
import {Chantier} from '../../../adapters/secondaries/db/entity/Chantier';

export interface SynchronisationService {
  loadData(lastUpadet: string): Observable<Chantier[]>;
}
