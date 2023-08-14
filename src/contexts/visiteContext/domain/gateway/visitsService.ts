import {Observable} from 'rxjs';
import {Flash} from '../entity/Flash';
import {Site} from '../entity/Site';

export interface VisitsService {
  SaveFlash(data: Flash): Observable<void>;
  LoadAllSites(): Observable<Site[]>;
}
