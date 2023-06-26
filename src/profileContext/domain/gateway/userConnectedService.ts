import {Observable} from 'rxjs';
import {Profile} from '../entity/profile';

export interface UserConnectedService {
  setUserConnected(userConnected: Profile): void;
  checkUserConnected(): Observable<boolean>;
}
