import {Observable} from 'rxjs';
import {Stat} from '../entity/Stat';
import {Statistic} from '../../../common/adapters/secondaries/db/entity/Statistic';

export interface DBStatRepository {
  loadStatFomLocal(): Observable<Stat>;
  saveStatInLocal(stat: Statistic): Observable<void>;
}
