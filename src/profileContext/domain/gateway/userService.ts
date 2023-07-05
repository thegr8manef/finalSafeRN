import {Observable} from 'rxjs';
import {Profile} from '../entity/profile';
import {User} from '../entity/user';

export interface UserService {
  setUserConnected(userConnected: Profile): Observable<void>;
  checkUserConnected(): Observable<boolean>;
  loadProfileDetails(): Observable<Profile>;
  updateLocalProfile(user: User): Observable<void>;
}
