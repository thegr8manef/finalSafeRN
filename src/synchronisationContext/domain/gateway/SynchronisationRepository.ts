import {Observable} from 'rxjs';
import {Chantier} from '../../../common/adapters/secondaries/db/entity/Chantier';

export interface SynchronisationRepository {
  saveData(chanties: Chantier[]): Observable<void>;
  loadLastUpdateDate(): Observable<string>;
}
