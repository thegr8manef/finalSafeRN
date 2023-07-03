import {Observable, from} from 'rxjs';
import {UserConnectedService} from '../../domain/gateway/userConnectedService';
import ApplicationContext from '../../../common/appConfig/ApplicationContext';
import {Profile} from '../../domain/entity/profile';
import {LocalProfilMapper} from './mapper/localProfile.mapper';
export class UserConnected implements UserConnectedService {
  setUserConnected(userConnected: Profile): Observable<boolean> {
    return new Observable<boolean>(observer => {
      const db = ApplicationContext.getInstance().db();
      try {
        db.then(realm => {
          realm?.write(() => {
            realm.create('User', {
              fn: userConnected.name.substring(
                0,
                userConnected.name.indexOf(' '),
              ),
              ln: userConnected.name.substring(userConnected.name.indexOf(' ')),
              em: userConnected.email,
              connected: true,
              lr: false,
              visitCreated: 0,
            });
          });
          observer.next(true); // Emit the boolean value
          observer.complete(); // Complete the observable
        });
      } catch (error) {
        observer.next(false); // Emit the boolean value
        observer.complete(); // Complete the observable
      }
    });
  }

  checkUserConnected(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      const db = ApplicationContext.getInstance().db();

      try {
        db.then(realm => {
          realm?.write(() => {
            const objects = realm.objects('User');
            if (objects.length > 0) {
              const connected = objects[0].connected;
              observer.next(connected); // Emit the boolean value
              observer.complete(); // Complete the observable
            } else {
              observer.next(false);
              observer.complete();
            }
          });
        });
      } catch (error) {
        observer.error(error); // Emit an error if there's an exception
      }
    });
  }

  loadProfileDetails(): Observable<Profile> {
    const db = ApplicationContext.getInstance().db();

    const promiseCheckUser = new Promise<Profile>((resolve, reject) => {
      try {
        db.then(realm => {
          realm?.write(() => {
            const objects = realm.objects('User');
            resolve(LocalProfilMapper.mapUserDbToProfile(objects[0]));
          });
        });
      } catch (error) {
        console.log(error);
      }
    });
    return from(promiseCheckUser);
  }
}
