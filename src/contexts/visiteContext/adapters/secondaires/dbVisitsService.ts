import { mergeMap, map } from 'rxjs/operators';
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
import { v5 as uuidv5 } from 'uuid';
import { NAME, NAMESPACE } from '@common/constants';
import { DBUserRepository } from '@contexts/profileContext/adapters/secondaires/DBUserRepository';

export class DbVisitsService implements VisitsService {
  private userRepository: DBUserRepository;

  constructor(userRepository: DBUserRepository) {
    this.userRepository = userRepository;
  }

  SaveFlash(data: VisitFlash): Observable<void> {
    const saveFlashtoDb = new Promise<Remarque>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      try {
        db.then(realm => {
          realm?.write(() => {
            const newRemarque = realm.create<Remarque>('Remarque', {
              tk: uuidv5(NAME, NAMESPACE),
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

            console.log("New Remarque created:", newRemarque);
            resolve(newRemarque);
          });
        }).catch(error => {
          console.log("Error creating Remarque:", error);
          reject(error);
        });
      } catch (error) {
        console.log("Error creating Remarque:", error);
        reject(error);
      }
    });

    return from(saveFlashtoDb).pipe(
      mergeMap((createdRemarque: Remarque) => this.SaveVisit(data, createdRemarque))
    );
  }

  SaveVisit(data: VisitFlash, createdRemarque: Remarque): Observable<void> {
    const currentDateTime = moment();
    const formattedCurrentDateTime = currentDateTime.format("YYYY/MM/DD HH:mm:ss");
    const currentDateTimeInMillis = moment().valueOf();

    console.log('formattedCurrentDateTime');
    const saveVisitToDb = new Promise<void>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();

      try {
        db.then((realm) => {
          const user = realm.objects('User');
          realm?.write(() => {
            const newVisit = realm.create<Visit>("Visit", {
              // Map Visit properties from data
              dt: formattedCurrentDateTime,
              dtc: formattedCurrentDateTime,
              date: currentDateTimeInMillis,
              timeStamp: currentDateTime.format("DD MMMM YYYY"),
              codeChantier: createdRemarque.idcs,
              V_enCours: 0,
              ordre: 0,
              userId: user[0]?.id,
              type: createdRemarque.lvl,
            });

            if (newVisit.remarques) {
              newVisit.remarques.push(createdRemarque);
            }

            console.log('Visit added');
            resolve();
          });
        }).catch((error) => {
          console.log("Error saving Visit:", error);
          reject(error);
        });
      } catch (error) {
        console.log("Error saving Visit:", error);
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
}
function switchMap(arg0: (isConnected: any) => Observable<unknown>): import("rxjs").OperatorFunction<boolean, void> {
  throw new Error('Function not implemented.');
}

