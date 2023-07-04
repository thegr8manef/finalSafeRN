import {VisitsService} from '../../domain/gateway/visitsService';
import {Observable} from 'rxjs';
import {Flash} from '../../domain/entity/Flash';
import ApplicationContext from '../../../common/appConfig/ApplicationContext';

export class DbVisitsService implements VisitsService {
  SaveFlash(data : Flash): Observable<void> {
    const flash = new Flash;
    const saveFlashtoDb = new Promise<void>((resolve, reject) => {

      const db = ApplicationContext.getInstance().db();

      try {
        db.then(realm => {
          realm?.write(() => {
            realm.create('Remarque', {
              nbPhoto: 0 ,
              ds: flash.ds,
              photos: flash.photos,
              nt: false,
              ti: flash.ti,
              VisiteId: -1,
              or: 0,
              note: null,
              levee: false,
              VisiteIdLevee: -1,
              lvl : flash.lvl
            });
          });
          resolve(); // Emit the boolean value
        });
      } catch (error) {
        reject(error);
      }
    });
    return from(saveFlashtoDb);

  }

  };
    
