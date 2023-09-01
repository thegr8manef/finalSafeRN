import { Observable } from 'rxjs';
import { Site } from '../entity/Site';
import { Visit } from '../entity/Visit';
import { VisitFlash } from '../entity/VisitFlash';
import { Remarque } from '@common/adapters/secondaries/db/entity/Remarque';
import CustomRemarque  from "@contexts/visiteContext/domain/entity/Remarque";

export interface VisitsService {
  SaveFlash(data: VisitFlash): Observable<Remarque>;
  LoadAllSites(): Observable<Site[]>;
  loadVisitsDetails(): Observable<Visit[]>;
  SaveVisit(data: Remarque): Observable<void>;
  loadRemarques(): Observable<CustomRemarque[]>;
  deleteVisits(): Observable<void>;
}
