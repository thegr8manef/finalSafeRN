import {VisitsService} from '../../domain/gateway/visitsService';
import {Observable, from} from 'rxjs';
import {Flash} from '../../domain/entity/Flash';
import ApplicationContext from '../../../common/appConfig/ApplicationContext';

export class DbVisitsService implements VisitsService {
  SaveFlash(data: Flash): Observable<void> {
    const saveFlashtoDb = new Promise<void>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      console.log('Connection with realm DB')
      try {
        db.then(realm => {
          realm?.write(() => {
            console.log('SaveFlash map to realm start '+realm.isEmpty);
            realm.create('Remarque', {
              nbPhoto: data.images.length,
              ds: data.commentaire,
              photos: data.images,
              ti: data.commentaire,
              lvl: data.level,
            });
            console.log('Finished writing in');
            resolve(); // Resolve the Promise
          });
        }).catch(error => {
          console.error(error)
          reject(error);
        });
      } catch (error) {
        console.error(error)
        reject(error);
      }
    });
    console.log('Return this act')
    return from(saveFlashtoDb);
  }
}
    
