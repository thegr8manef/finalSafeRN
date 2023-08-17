import {Observable} from 'rxjs';
import { Visit } from '../entity/Visits';


export interface VisitsRepository {
  loadVisitsDetails(): Observable<Visit[]>;
}
