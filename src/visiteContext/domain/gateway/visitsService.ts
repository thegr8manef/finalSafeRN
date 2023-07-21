import {Observable} from 'rxjs';
import {Flash} from '../entity/Flash';
import {Chantier} from '../entity/Chantier';

export interface VisitsService {
  SaveFlash(data: Flash): Observable<void>;
  LoadChantier(chantier: Chantier): Observable<void>;
}
