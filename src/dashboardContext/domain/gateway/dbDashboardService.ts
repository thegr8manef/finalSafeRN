import {Observable} from 'redux';
import {Stat} from '../entity/Stat';

export interface DBDashboardService {
  loadStatFomLocal(): Observable<Stat>;
  saveStatInLocal(): Observable<void>;
}
