import {Observable} from 'rxjs';
import {Flash} from '../entity/Flash';

export interface VisitsService {
  LoadFlash(): Observable<Flash>;
}
