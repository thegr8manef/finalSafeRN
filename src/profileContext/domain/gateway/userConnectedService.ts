import {Observable} from 'rxjs';

export interface UserConnectedService {
  setUserConnected(userConnected: boolean): boolean;
  checkUserConnected(): Observable<boolean>;
}
