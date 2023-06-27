import {Observable, from} from 'rxjs';
import {UserConnectedService} from '../../domain/gateway/userConnectedService';
import ApplicationContext from '../../../common/appConfig/ApplicationContext';
import {Profile} from '../../domain/entity/profile';
import {LocalProfilMapper} from './mapper/localProfile.mapper';
export class UserConnected implements UserConnectedService {
  setUserConnected(userConnected: Profile) {
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
      });
    } catch (error) {}
  }

  checkUserConnected(): Observable<boolean> {
    const db = ApplicationContext.getInstance().db();

    const promiseCheckUser = new Promise<boolean>((resolve, reject) => {
      try {
        db.then(realm => {
          realm?.write(() => {
            const objects = realm.objects('User');
            resolve(objects[0].connected);

            console.log(objects[0].connected);
          });
        });
      } catch (error) {
        console.log(error);
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
        console.log(error);
      }
    });
    return from(promiseCheckUser);
  }
}
