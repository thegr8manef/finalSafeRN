import {VisitsService} from '../../domain/gateway/visitsService';
import {Observable, from, of} from 'rxjs';
import {Flash} from '../../domain/entity/Flash';
import ApplicationContext from '../../../common/appConfig/ApplicationContext';
import {Chantier} from '../../domain/entity/Chantier';
import { ChantierMapper } from './mapper/chantier.mapper';

export class DbVisitsService implements VisitsService {
  SaveFlash(data: Flash): Observable<void> {
    const saveFlashtoDb = new Promise<void>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      try {
        db.then(realm => {
          realm?.write(() => {
            realm.create('Remarque', {
              nbPhoto: data.images.length,
              ds: data.commentaire,
              photos: data.images,
              ti: data.commentaire,
              lvl: Number(data.level),
              nt: false,
              or: 0,
              levee: false,
              ordreGlobal: 0,
              fromObs: false,
              completed: false,
              unq: false,
              tg: 1,
            });
            resolve(); // Resolve the Promise
          });
        }).catch(error => {
          reject(error);
        });
      } catch (error) {
        reject(error);
      }
    });
    return from(saveFlashtoDb);
  }

  LoadChantierByCode(code: string): Observable<Chantier> {
    const LoadChantierInDb = new Promise<Chantier>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();

      try {
        db.then(realm => {
          const objects = realm.objects('Chantier').filtered('ref == $0', code);
          resolve(ChantierMapper.maptoChantier(objects[0]));
          console.log('object', objects);
        });
      } catch (error) {
        console.log('error', error);
        reject(error);
      }
    });
    return from(LoadChantierInDb);
  }
}
