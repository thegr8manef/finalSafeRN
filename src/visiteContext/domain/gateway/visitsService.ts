import {Observable} from 'rxjs';
import {Flash} from '../entity/Flash';

export interface VisitsService {
  SaveFlash(data: Flash): Observable<void>;
  LoadChantier(chantier: string): Observable<void>;
}
