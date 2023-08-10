import {Observable} from 'rxjs';
import {Chantier} from '../../../common/adapters/secondaries/db/entity/Chantier';
import {Site} from '../../../visiteContext/domain/entity/Site';

export interface SynchronisationRepository {
  saveData(sites: Site[]): Observable<void>;
  loadLastUpdateDate(): Observable<string>;
}
