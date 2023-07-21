import {Observable} from 'rxjs';
import {Flash} from '../entity/Flash';

export interface VisitsService {
  SaveFlash(data: Flash): Observable<void>;
  SearchChantier(chantier: string): Observable<void>;
}
