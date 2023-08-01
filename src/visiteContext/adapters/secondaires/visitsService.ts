import {VisitsService} from '../../domain/gateway/visitsService';
import {Observable, from, of} from 'rxjs';
import {Flash} from '../../domain/entity/Flash';
import ApplicationContext from '../../../common/appConfig/ApplicationContext';
import {Chantier, Site} from '../../domain/entity/Site';
import { ChantierMapper, SiteMapper } from './mapper/site.mapper';

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

  LoadSiteByCode(code: string): Observable<Site> {
    const LoadChantierInDb = new Promise<Site>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();

      try {
        db.then(realm => {
          const objects = realm.objects('Chantier').filtered('ref == $0', code);
          resolve(SiteMapper.maptoSite(objects[0]));
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
