import {Observable, from} from 'rxjs';
import {SynchronisationRepositoryIDAO} from '../../domain/gateway/SynchronisationRepositoryIDAO';
import ApplicationContext from '../../../appConfig/ApplicationContext';
import {Chantier} from '../../../adapters/secondaries/db/entity/Chantier';

export class SynchronisationRepository
  implements SynchronisationRepositoryIDAO
{
  saveData(chanties: Chantier[]): Observable<void> {
    console.log('---------TEST-------');
    console.log(chanties);
    const promisSaveData = new Promise<void>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      try {
        db.then(realm => {
          realm?.write(() => {
            chanties.forEach(chantie => {
              realm.create('Chantier', chantie);
            });
          });
          resolve();
        });
      } catch (error) {
        reject(error);
      }
    });

    return from(promisSaveData);
  }
}
