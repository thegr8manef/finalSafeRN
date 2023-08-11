import {Observable} from 'rxjs';
import {Profile} from '../entity/profile';
import {User} from '../entity/user';

export interface ProfileService {
  loginMsal(): Observable<Profile>;
  loadProfileDetails(accessToken: string): Observable<User>;
}
