import { map, catchError } from 'rxjs/operators';
import { VisitsService } from '../../domain/gateway/visitsService';
import { Observable, from } from 'rxjs';
import ApplicationContext from '@common/appConfig/ApplicationContext';
import { Site } from '../../domain/entity/Site';
import { SiteMapper } from './mapper/site.mapper';
import { VisitFlash } from '@contexts/visiteContext/domain/entity/VisitFlash';
import moment from "moment"; // Import Moment.js
import { VisitMapper } from './mapper/visit.mapper';
import { Visit as VisitDb } from '@common/adapters/secondaries/db/entity/Visit';
import { Remarque } from '@common/adapters/secondaries/db/entity/Remarque';
import { v5 as uuidv5 } from 'uuid';
import { NAMESPACE } from '@common/constants';
import { Visit } from '@contexts/visiteContext/domain/entity/Visit';

export class DbVisitsService implements VisitsService {

  SaveFlash(data: VisitFlash): Observable<Remarque> { // Update the return type to Observable<Remarque>
    const saveFlashtoDb = new Promise<Remarque>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      const name = Date.now().toString() + Math.random().toString();
      try {
        db.then(realm => {
          realm?.write(() => {
            const newRemarque = realm.create<Remarque>('Remarque', {
              tk: uuidv5(name, NAMESPACE),
              nbPhoto: data.images.length,
              ds: data.commentaire,
              photos: data.images,
              ti: data.commentaire,
              lvl: Number(data.level),
              nt: false,
              or: 0,
              idcs: data.site_id,
              levee: false,
              ordreGlobal: 0,
              fromObs: false,
              completed: false,
              unq: false,
              tg: 1,
            });
            resolve(newRemarque);
          });
        }).catch(error => {
          reject(error);
        });
      } catch (error) {
        reject(error);
      }
    });

    return from(saveFlashtoDb).pipe(
      map((createdRemarque: Remarque) => {
        // Return the created Remarque
        return createdRemarque;
      }),
      catchError(error => {
        // Handle errors here if needed
        throw error; // Re-throw the error to propagate it in the observable
      })
    );
  }

  SaveVisit(createdRemarque: Remarque): Observable<void> {
    const currentDateTime = moment();
    const formattedCurrentDateTime = currentDateTime.format("YYYY/MM/DD HH:mm:ss");
    const currentDateTimeInMillis = moment().valueOf();
    const saveVisitToDb = new Promise<void>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      const name = Date.now().toString() + Math.random().toString();
      // Find the chantier based on createdRemarque.idcs
      try {
        db.then((realm) => {
          const user = realm.objects('User');
          const chantier = realm
            .objects('Chantier')
            .filtered(`ref = "${createdRemarque.idcs}"`)[0];
          realm?.write(() => {
            const newVisit = realm.create<VisitDb>("Visit", {
              // Map Visit properties from data
              id: uuidv5(name, NAMESPACE),
              dt: formattedCurrentDateTime,
              dtc: formattedCurrentDateTime,
              date: currentDateTimeInMillis,
              timeStamp: currentDateTime.format("DD MMMM YYYY"),
              chantier: chantier,
              codeChantier: createdRemarque.idcs,
              V_enCours: 0,
              ordre: 0,
              userId: user[0]?.id,
              type: createdRemarque.lvl,
            });
            if (newVisit.remarques) {
              newVisit.remarques.push(createdRemarque);
            }
            resolve();
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
          const objects = realm.objects('Visit');
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
}

