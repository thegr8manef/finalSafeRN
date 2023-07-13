import {Observable} from 'rxjs';

export interface ConnectionRepository {
  loadConnectionState(): Observable<boolean>;
  setConnectionState(): Observable<void>;
}
