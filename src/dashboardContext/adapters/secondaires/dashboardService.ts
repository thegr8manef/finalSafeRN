import {DashboardService} from '../../domain/gateway/dashboardService';
import {Observable, from} from 'rxjs';
import {ObservableAjaxHttpClient} from '../../../common/adapters/secondaries/real/observableAjaxHttpClient';
import {Stat} from '../../domain/entity/Stat';
import {catchError, map} from 'rxjs/operators';
import {StatDto} from './dto/stat.dto';
import {StatMapper} from './mapper/stat.mapper';
import {throwError} from 'rxjs';

export class dashboardService implements DashboardService {
  private headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  statFun(): Observable<Stat> {
    const url =
      'https://staging.finalsafe.mobelite.fr/ws.php/V2.3/api/statistic';
    this.headers.token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIyM2JmYmVlMy1iMzc0LTQ5MWEtYjI0Mi0wODk2ZmMwYWYxNmUiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vMTNmY2Q2ZmItMTBkNi00Y2RlLThlZTQtYWZjMWUxZmFkYTNmL3YyLjAiLCJpYXQiOjE2ODQ3NDgzNzcsIm5iZiI6MTY4NDc0ODM3NywiZXhwIjoxNjg0NzUyMjc3LCJhaW8iOiJBVFFBeS84VEFBQUFLNVhFTE52RW9tYk5OVXh3cHhPMkJsQloraFJacE5SdmlyTUNRYUEyWDRNYlI3clFUUDhpN1drR3N4OFlYYXVsIiwiZmFtaWx5X25hbWUiOiJTb3Vpc3NpIiwiZ2l2ZW5fbmFtZSI6IkhpYmEiLCJuYW1lIjoiSGliYSBTb3Vpc3NpIiwib2lkIjoiM2Q1ODU3ZDYtMjZhMy00OWIwLTg3ZWItMmU2MjhmZjM2NTM1IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiaHNvdWlzc2lAbW9iZWxpdGVkZXYub25taWNyb3NvZnQuY29tIiwicmgiOiIwLkFWMEEtOWI4RTlZUTNreU81S19CNGZyYVAtTy12eU4wc3hwSnNrSUlsdndLOFc1ZEFDTS4iLCJzdWIiOiJXOXBpX0twUDYxblV0SlQ3WHFtQ0lQbThCYTJ4dGVjalNScGxSMDViTXlFIiwidGlkIjoiMTNmY2Q2ZmItMTBkNi00Y2RlLThlZTQtYWZjMWUxZmFkYTNmIiwidXRpIjoiT2t0ZVFGb0ZvRUtDeXBLWU1PMGNBQSIsInZlciI6IjIuMCJ9.rxViVlMj7ZnE1vOMI2xwK5V948djtL0S0yahfqVy0ezbGPNatWEAM_hngDFrzQb6JYoDLLSwp08w7O4JOBO_AIQOuOxCwRPf8L_WsLlcsIB7mEQjBYuxvYRXHaux0oBRYK2R2eMZlTcx2tRtrX6eBG0V-g6QAouOTstoOF2ZxaaH-xwClFe5vxEW_icA59E53SH-KO9h4Zu7utcb7qltjQOiW2dRxAgYtzGxYbG-YTCdJCelmyLm7-JdM3htaHT0wgcg21XzbFWMsxIF8F3BKXkqPj3_7HidbgfHo_dnn4nVJdvsHW34cAOolXANiK_tEBkrtg2OLI22lbqUzKUHfQ';
    const body: Record<string, string> = {
      tp: '-1',
    };     return new ObservableAjaxHttpClient()
      .post<StatDto>(url, body, this.headers)
      .pipe(
        map(response => StatMapper.mapToStat(response)),
        catchError(err => throwError(err.status.toString())),
      );
  }
}
