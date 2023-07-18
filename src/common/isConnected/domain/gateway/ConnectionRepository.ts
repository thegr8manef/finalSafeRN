import {Observable} from 'rxjs';

export interface ConnectionRepository {
  loadConnectionStatus(): Observable<boolean>;
}
