import {Observable} from 'rxjs';
import {Profile} from '../entity/profile';

export interface UserService {
  setUserConnected(userConnected: Profile): Observable<void>;
  checkUserConnected(): Observable<boolean>;
  loadProfileDetails(): Observable<Profile>;
}
