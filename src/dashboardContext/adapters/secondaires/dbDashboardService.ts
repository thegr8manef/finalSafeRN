import {Observable} from 'redux';
import {Stat} from '../../domain/entity/Stat';
import {DBDashboardService} from '../../domain/gateway/dbDashboardService';
import ApplicationContext from '../../../common/appConfig/ApplicationContext';

export class dbDashboardService implements DBDashboardService {
  loadStatFomLocal(): Observable<Stat> {
    throw new Error('Method not implemented.');
  }
  saveStatInLocal(): Observable<void> {
    const promiSetUser = new Promise<void>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      try {
        db.then(realm => {
          realm?.write(() => {
            realm.create('Statistic', {
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
          resolve(); // Emit the boolean value
        });
      } catch (error) {
        reject(error);
      }
    });

    return from(promiSetUser);
  }
}
