import {Observable} from 'rxjs';
import {Stat} from '../entity/Stat';

export interface StatsRepository {
  loadLocalStats(): Observable<Stat>;
  saveStats(stat: Stat): Observable<void>;
}
