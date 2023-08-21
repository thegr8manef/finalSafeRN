import { VisitsService } from '../../domain/gateway/visitsService';
import { Observable, from } from 'rxjs';
import ApplicationContext from '@common/appConfig/ApplicationContext';
import { Site } from '../../domain/entity/Site';
import { SiteMapper } from './mapper/site.mapper';
import { VisitFlash } from '@contexts/visiteContext/domain/entity/VisitFlash';
import moment from "moment"; // Import Moment.js
import { VisitMapper } from './mapper/visit.mapper';
import { Visit } from '@common/adapters/secondaries/db/entity/Visit';
import { Remarque } from '@common/adapters/secondaries/db/entity/Remarque';
import  CustomRemarque  from '../../domain/entity/Remarque';
import { RemarqueMapper } from './mapper/remarque.mapper';


export class DbVisitsService implements VisitsService {
 
 
  SaveFlash(data: VisitFlash): Observable<void> {
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

  SaveVisit(data: Visit): Observable<void> {
    const currentDateTime = moment(); // Get current date and time
    const formattedCurrentDateTime = currentDateTime.format("YYYY/MM/DD HH:mm:ss"); // Format as "YYYY/MM/DD HH:mm:ss"
    const saveVisitToDb = new Promise<void>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      try {
        db.then((realm) => {
          realm?.write(() => {
            const newVisit = realm.create<Visit>("Visit", {
              // Map Visit properties from data
              dt: formattedCurrentDateTime,
              dtc: formattedCurrentDateTime,
              timeStamp: currentDateTime.format("DD MMMM YYYY"),
              codeChantier: data.codeChantier,
              V_enCours: 0,
              ordre: 0,
              userId: data.userId
            });
            if (newVisit.remarques) {
              const relatedRemarques = realm.objects<Remarque>("Remarque").filtered(`id IN $0`, data.remarques || []);
              const relatedRemarquesSnapshot = relatedRemarques.snapshot();
              relatedRemarquesSnapshot.forEach((remarque) => {
                newVisit.remarques!.push(remarque);
              });
            }
            resolve(); // Resolve the Promise
          });
        }).catch((error) => {
          reject(error);
        });
      } catch (error) {
        reject(error);
      }
    });
    return from(saveVisitToDb);
  }


  loadVisitsDetails(): Observable<Visit[]> {
    const LoadVisitDb = new Promise<Visit[]>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      try {
        db.then(realm => {
          const objects = realm.objects('Visit')
          resolve(VisitMapper.mapToVisit(objects));
        });
      } catch (error) {
        reject(error);
      }
    });
    return from(LoadVisitDb);
  }

  LoadAllSites(): Observable<Site[]> {
    const LoadChantierInDb = new Promise<Site[]>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      try {
        db.then(realm => {
          const objects = realm.objects('Chantier')
          resolve(SiteMapper.maptoSites(objects));
        });
      } catch (error) {
        reject(error);
      }
    });
    return from(LoadChantierInDb);
  }

  loadRemarques(): Observable<CustomRemarque[]> {
    const LoadRemarqueDB = new Promise<CustomRemarque[]>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      try {
        db.then(realm => {
          const objects = realm.objects('Remarque')
          resolve(RemarqueMapper.mapperToRemarques(objects));
        });
      } catch (error) {
        reject(error);
      }
    });
    return from(LoadRemarqueDB);
  }
}
