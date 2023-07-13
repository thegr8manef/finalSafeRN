import {Observable, from} from 'rxjs';
import {ConnectionRepository} from '../../domain/geteway/ConnectionRepository';
import NetInfo from '@react-native-community/netinfo';

export class connectionRepository implements ConnectionRepository {
  loadConnectionState(): Observable<boolean> {
    const promisConnection = new Promise<boolean>((resolve, reject) => {
      try {
        NetInfo.fetch()
          .then(state => {
            resolve(state.isConnected!!);
          })
          .catch(error => {
            reject(error);
          });
      } catch (error) {}
    });
    return from(promisConnection);
  }
  setConnectionState(): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
