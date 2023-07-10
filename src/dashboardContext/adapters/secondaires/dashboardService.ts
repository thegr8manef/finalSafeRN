import {DashboardService} from '../../domain/gateway/dashboardService';
import {Observable, from} from 'rxjs';
import {ObservableAjaxHttpClient} from '../../../common/adapters/secondaries/real/observableAjaxHttpClient';
import {Stat} from '../../domain/entity/Stat';
import {catchError, map} from 'rxjs/operators';
import {StatDto} from './dto/stat.dto';
import {StatMapper} from './mapper/stat.mapper';
import {throwError} from 'rxjs';
import ws from '../../../config/ws';

export class dashboardService implements DashboardService {
  private headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  LoadStat(): Observable<StatDto> {
    const url = ws.baseUrl + '/statistic';
    this.headers.token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIyM2JmYmVlMy1iMzc0LTQ5MWEtYjI0Mi0wODk2ZmMwYWYxNmUiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vMTNmY2Q2ZmItMTBkNi00Y2RlLThlZTQtYWZjMWUxZmFkYTNmL3YyLjAiLCJpYXQiOjE2ODU0NDI5MDEsIm5iZiI6MTY4NTQ0MjkwMSwiZXhwIjoxNjg1NDQ2ODAxLCJhaW8iOiJBV1FBbS84VEFBQUFmeWMzNjBySDcrS3pwQTI3U1ZBVFpENE1mRnlYQ1RpWUFjTWN1enliU2l3UDBRcndSaFFpYVhQS1ZjMkxhUCtSUUdIRmZ1QXIwTUlEcUg1d29FVmhsQmMxcGdBbGtrYkgrZjZkTnMxVllSRExnQUIwYmpXYTcvTjY0Q3lsSm9uciIsImZhbWlseV9uYW1lIjoiU291aXNzaSIsImdpdmVuX25hbWUiOiJIaWJhIiwibmFtZSI6IkhpYmEgU291aXNzaSIsIm9pZCI6IjNkNTg1N2Q2LTI2YTMtNDliMC04N2ViLTJlNjI4ZmYzNjUzNSIsInByZWZlcnJlZF91c2VybmFtZSI6Imhzb3Vpc3NpQG1vYmVsaXRlZGV2Lm9ubWljcm9zb2Z0LmNvbSIsInJoIjoiMC5BVjBBLTliOEU5WVEza3lPNUtfQjRmcmFQLU8tdnlOMHN4cEpza0lJbHZ3SzhXNWRBQ00uIiwic3ViIjoiVzlwaV9LcFA2MW5VdEpUN1hxbUNJUG04QmEyeHRlY2pTUnBsUjA1Yk15RSIsInRpZCI6IjEzZmNkNmZiLTEwZDYtNGNkZS04ZWU0LWFmYzFlMWZhZGEzZiIsInV0aSI6InBtVUVnWFd3elU2dUhBMUtHUzFLQUEiLCJ2ZXIiOiIyLjAifQ.bW8EoxXZ6ysEe__CZom7ZwiQxL4RpM_u3dh_ffovK0Dh1ZdFrqJVqFgb9HkLwvtdO36VTT7PBRplTZMq99JTx15Zxbm6KOaqMlKXzYig8Gsc-z12yVuIsEUcHjv6YBQr5hoKfXmtUH0G4OzOH9p_lEhpJMpbmRLNCX54jY64-zSmWFxOVg6kGygc9tK_x2BY5z4dH71_sA62ZwLEVpZnd-pMuLopMhY7bOe276JKl7r7AJMjKeG8yxDKi-wnTotaR1qPxsVdBsW5DkAjLfGqc5DBkgfinMYi1u0uPEiMFCR8USlXiNpB-krXzwwvSXC1MH5nNMBRhD-J2332ipwvoA';
    const body: Record<string, string> = {
      tp: '-1',
    };
    return new ObservableAjaxHttpClient()
      .post<StatDto>(url, body, this.headers)
      .pipe(
        map(response => response.response),
        catchError(err => throwError(err.status.toString())),
      );
  }
}
