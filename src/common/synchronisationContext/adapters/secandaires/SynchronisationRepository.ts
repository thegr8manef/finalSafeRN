import {Observable, from} from 'rxjs';
import {SynchronisationRepositoryIDAO} from '../../domain/gateway/SynchronisationRepositoryIDAO';
import ApplicationContext from '../../../appConfig/ApplicationContext';
import {Chantier} from '../../../adapters/secondaries/db/entity/Chantier';

export class SynchronisationRepository
  implements SynchronisationRepositoryIDAO
{
  saveData(chanties: Chantier[]): Observable<void> {
    console.log(chanties);
    const promisSaveData = new Promise<void>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      try {
        if (chanties.length > 0) {
          db.then(realm => {
            realm?.write(() => {
              chanties.forEach(chantie => {
                realm.create('Chantier', chantie);
              });
              let updt = realm.objects('User');
              realm?.write(() => {
                updt[0].lus = chanties[0].lu;
              });
            });
            resolve();
          });
        }
      } catch (error) {
        reject(error);
      }
    });

    return from(promisSaveData);
  }

  static loadLastUpdateDate(): Observable<string> {
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
