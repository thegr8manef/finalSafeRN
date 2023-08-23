import {Observable, from} from 'rxjs';
import {UserRepository} from '../../domain/gateway/userReposiory';
import ApplicationContext from '@common/appConfig/ApplicationContext';
import {Profile} from '../../domain/entity/profile';
import {LocalProfilMapper} from './mapper/localProfile.mapper';
import {User} from '../../domain/entity/user';
import { NAMESPACE } from '@common/constants';
import { v5 as uuidv5 } from 'uuid';

export class DBUserRepository implements UserRepository {
  pipe: any;
  setUserConnected(userConnected: Profile): Observable<void> {
    const promiSetUser = new Promise<void>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      const name = Date.now().toString() + Math.random().toString();

      try {
        db.then(realm => {
          realm?.write(() => {
            realm.create('User', {
              id: uuidv5(name, NAMESPACE),
              fn: userConnected.name.substring(
                0,
                userConnected.name.indexOf(' '),
              ),
              ln: userConnected.name.substring(userConnected.name.indexOf(' ')),
              em: userConnected.email,
              connected: true,
              lr: false,
              visitCreated: 0,
              lu: '-1',
              token: userConnected.accessToken,
            });
          });
          resolve(); // Emit the boolean value
        });
      } catch (error) {
        reject(error);
      }
    });

    return from(promiSetUser);
  }

  checkUserConnected(): Observable<boolean> {
    const promiseCheckUser = new Promise<boolean>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      try {
        db.then(realm => {
          realm?.write(() => {
            const objects = realm.objects('User');
            if (objects.length > 0) {
              const connected = objects[0].connected;
              resolve(connected);
            } else {
              resolve(false);
            }
          });
        });
      } catch (error) {
        reject(error);
      }
    });
    return from(promiseCheckUser);
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
        reject(error);
      }
    });
    return from(promiseCheckUser);
  }

  updateLocalProfile(user: User): Observable<void> {
    const promiUpdateUser = new Promise<void>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      try {
        db.then(realm => {
          const updt = realm.objects('User');
          realm?.write(() => {
            updt[0].rg = user.region;
          });
          resolve();
        });
      } catch (error) {
        reject(error);
      }
    });

    return from(promiUpdateUser);
  }
}
