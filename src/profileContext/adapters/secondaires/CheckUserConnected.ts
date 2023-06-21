import {Observable} from 'rxjs';
import {UserConnectedService} from '../../domain/gateway/userConnectedService';
import ApplicationContext from '../../../common/appConfig/ApplicationContext';
export class CheckUserConnected implements UserConnectedService {
  setUserConnected(userConnected: boolean): boolean {
    throw new Error('Method not implemented.');
  }

  checkUserConnected(): Observable<boolean> {
    const db = ApplicationContext.getInstance().db();
    return new Observable<boolean>(observer => {
      try {
        db.then(realm => {
          realm?.write(() => {
            const objects = realm.objects('User');
            objects.forEach(object => {
              const propertyValue = object['connected'];
              observer.next(propertyValue);
              console.log('------***', propertyValue);

              observer.complete();
            });
          });
        });
      } catch (error) {
        console.log(error);
      }
    });
  }
}
