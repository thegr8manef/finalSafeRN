import {Observable} from 'rxjs';
import {Stat} from '../entity/Stat';

export interface StatisticService {
  loadStatistic(): Observable<Stat>;
}
