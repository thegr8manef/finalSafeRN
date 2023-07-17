import {Observable} from 'rxjs';
import {Chantier} from '../../../adapters/secondaries/db/entity/Chantier';

export interface SynchronisationRepositoryIDAO {
  saveData(chanties: Chantier[]): Observable<void>;
}
