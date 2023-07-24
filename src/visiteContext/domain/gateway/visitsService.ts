import {Observable} from 'rxjs';
import {Flash} from '../entity/Flash';
import {Chantier} from '../entity/Chantier';

export interface VisitsService {
  SaveFlash(data: Flash): Observable<void>;
  LoadChantierByCode(code: string): Observable<Chantier>;
}
