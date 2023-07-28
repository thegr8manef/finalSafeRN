import {Observable, from} from 'rxjs';
import {ConnectionRepository} from '../../domain/gateway/ConnectionRepository';
import NetInfo from '@react-native-community/netinfo';

export class connectionRepository implements ConnectionRepository {
  loadConnectionStatus(): Observable<boolean> {
    const promisConnection = new Promise<boolean>((resolve, reject) => {
      try {
        NetInfo.fetch()
          .then(state => {
            resolve(state.isConnected!);
          })
          .catch(error => {
            reject(error);
          });
      } catch (error) {}
    });
    return from(promisConnection);
  }
}
