import {Observable} from 'rxjs';
import {Site} from '../entity/Site';
import { VisitFlash } from '../entity/VisitFlash';

export interface VisitsService {
  SaveFlash(data: VisitFlash): Observable<void>;
  LoadAllSites(): Observable<Site[]>;
}
