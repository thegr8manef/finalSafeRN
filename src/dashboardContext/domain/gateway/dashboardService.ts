import {Observable} from 'rxjs';
import { Stat } from "../entity/Stat";

export interface DashboardService {
  statFun(): Observable<Stat>;

}
