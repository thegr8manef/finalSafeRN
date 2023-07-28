import {Observable, from} from 'rxjs';
import {SynchronisationRepository} from '../../domain/gateway/SynchronisationRepository';
import ApplicationContext from '../../../common/appConfig/ApplicationContext';
import {Chantier} from '../../../common/adapters/secondaries/db/entity/Chantier';

export class DBSynchronisationRepository implements SynchronisationRepository {
  saveData(chanties: Chantier[]): Observable<void> {
    const promisSaveData = new Promise<void>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      try {
        if (chanties.length > 0) {
          db.then(realm => {
            const updt = realm.objects('User');
            realm?.write(() => {
              chanties.forEach(chantie => {
                realm.create('Chantier', chantie);
              });
              updt[0].lu = chanties[0].lu?.toString();
            });
          });
        }
        resolve();
      } catch (error) {
        reject(error);
      }
    });

    return from(promisSaveData);
  }

  loadLastUpdateDate(): Observable<string> {
    const promisLastUpdate = new Promise<string>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      try {
        db.then(realm => {
          const objects = realm.objects('User');
          resolve(objects[0].lu);
        });
      } catch (error) {
        reject(error);
      }
    });

    return from(promisLastUpdate);
  }
}
