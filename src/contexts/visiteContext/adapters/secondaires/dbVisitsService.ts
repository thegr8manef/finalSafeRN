import { VisitsService } from '../../domain/gateway/visitsService';
import { Observable, from } from 'rxjs';
import ApplicationContext from '@common/appConfig/ApplicationContext';
import { Site } from '../../domain/entity/Site';
import { SiteMapper } from './mapper/site.mapper';
import { VisitFlash } from '@contexts/visiteContext/domain/entity/VisitFlash';
import { Visit } from '@contexts/visiteContext/domain/entity/Visits';
import moment from "moment"; // Import Moment.js
import { VisitMapper } from './mapper/visit.mapper';

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
            const newVisit = realm.create("Visit", {
              // Map Visit properties from data
              dt: formattedCurrentDateTime, // Replace with current date and time
              dtc: formattedCurrentDateTime, // Replace with current date and time
              timeStamp: currentDateTime.format("DD MMMM YYYY"), // Format as "15 août 2023"
              codeChantier: data.codeChantier,
              V_enCours: 0,
              order: 0,
              userId: data.userId
              // ... map other properties similarly
            });
            // Fetch all related Remarque objects in a single query
            const relatedRemarques = realm.objects("Remarque").filtered(`id IN $0`, data.remarques || []);
            // Associate all related Remarque objects
            newVisit.remarques.push(...relatedRemarques);
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
          resolve(VisitMapper.mapToVisits(objects));
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
}
