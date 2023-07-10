import {Observable} from 'rxjs';
import {Stat} from '../entity/Stat';
import {StatDto} from '../../adapters/secondaires/dto/stat.dto';

export interface DashboardService {
  LoadStat(): Observable<StatDto>;
}
