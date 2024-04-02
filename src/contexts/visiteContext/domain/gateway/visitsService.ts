import { Observable } from 'rxjs';
import { Site } from '../entity/Site';
import { Visit } from '../entity/Visit';
import { VisitFlash } from '../entity/VisitFlash';
import { Remarque } from '@common/adapters/secondaries/db/entity/Remarque';
import CustomRemarque  from "@contexts/visiteContext/domain/entity/Remarque";
import { Accompagnants } from '../entity/Accompagnant';

export interface VisitsService {
  SaveFlash(data: VisitFlash): Observable<Remarque>;
  LoadAllSites(): Observable<Site[]>;
  loadVisitsDetails(): Observable<Visit[]>;
  loadFlashsDetails(): Observable<VisitFlash[]>;
  SaveVisit(data: Visit): Observable<Visit>;
  loadRemarques(): Observable<CustomRemarque[]>;
  deleteVisits(): Observable<void>;
  loadAccompagnants(): Observable<Accompagnants[]>;

}
