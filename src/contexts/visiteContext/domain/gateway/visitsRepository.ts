import {Observable} from 'rxjs';
import { Visits } from '../entity/Visits';


export interface VisitsRepository {
  loadVisitsDetails(): Observable<Visits[]>;
}
