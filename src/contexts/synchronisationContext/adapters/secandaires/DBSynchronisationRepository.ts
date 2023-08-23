import { Observable, from } from 'rxjs';
import { SynchronisationRepository } from '../../domain/gateway/SynchronisationRepository';
import ApplicationContext from '@common/appConfig/ApplicationContext';
import { SynchronisationMapper } from './mapper/synchronisationMapper';
import { Site } from '@contexts/visiteContext/domain/entity/Site';

export class DBSynchronisationRepository implements SynchronisationRepository {
  saveData(sites: Site[]): Observable<void> {
    const promisSaveData = new Promise<void>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      try {
        if (sites.length > 0) {
          db.then(realm => {
            const updt = realm.objects('User');
            realm?.write(() => {
              sites.forEach(site => {
                realm.create(
                  'Chantier',
                  SynchronisationMapper.mapSiteToChantier(site),
                );
              });
              updt[0].lu = sites[0].last_update?.toString();
            });
          }).catch(error => reject(error));
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
