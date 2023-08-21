import {Observable} from 'rxjs';
import {Site} from '../entity/Site';
import { VisitFlash } from '../entity/VisitFlash';
import   Remarque  from '../entity/Remarque';
 
export interface VisitsService {
  SaveFlash(data: VisitFlash): Observable<void>;
  LoadAllSites(): Observable<Site[]>;
  loadRemarques(): Observable<Remarque[]>;

}
