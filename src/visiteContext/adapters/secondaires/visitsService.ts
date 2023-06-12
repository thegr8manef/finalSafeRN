import {VisitsService} from '../../domain/gateway/visitsService';
import {Observable} from 'rxjs';
import {Flash} from '../../domain/entity/Flash';

export class visitsService implements VisitsService {
  LoadFlash(): Observable<Flash> {}
}
