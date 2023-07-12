import {Observable} from 'rxjs';
import {Stat} from '../entity/Stat';
import {StatDto} from '../../adapters/secondaires/dto/stat.dto';
import {Statistic} from '../../../common/adapters/secondaries/db/entity/Statistic';

export interface DBDashboardService {
  loadStatFomLocal(): Observable<Stat>;
  saveStatInLocal(stat: Statistic): Observable<void>;
}
