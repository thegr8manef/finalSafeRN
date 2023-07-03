import {Observable} from 'rxjs';
import {Profile} from '../entity/profile';

export interface UserConnectedService {
  setUserConnected(userConnected: Profile): Observable<boolean>;
  checkUserConnected(): Observable<boolean>;
  loadProfileDetails(): Observable<Profile>;
}
