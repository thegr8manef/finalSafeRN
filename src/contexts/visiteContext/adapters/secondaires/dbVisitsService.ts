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
import { RemarqueMapper } from './mapper/remarque.mapper';
import CustomRemarque from "@contexts/visiteContext/domain/entity/Remarque";

export class DbVisitsService implements VisitsService {

  SaveFlash(data: VisitFlash): Observable<Remarque> { // Update the return type to Observable<Remarque>
    const saveFlashtoDb = new Promise<Remarque>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      db.then(realm => {
        realm?.write(() => {
          const newRemarque = realm.create<Remarque>('Remarque', {
            tk: data.id,
            nbPhoto: data.images.length,
            ds: data.commentaire,
            photos: data.images,
            ti: data.commentaire,
            lvl: Number(data.type),
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
    });

    return from(saveFlashtoDb);
  }

  SaveVisit(createdRemarque: Remarque): Observable<void> {
    const currentDateTime = moment();
    const formattedCurrentDateTime = currentDateTime.format("YYYY/MM/DD HH:mm:ss");
    const currentDateTimeInMillis = moment().valueOf();
    const saveVisitToDb = new Promise<void>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      const name = Date.now().toString() + Math.random().toString();
      // Find the chantier based on createdRemarque.idcs
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
    });

    return from(saveVisitToDb);
  }

  loadVisitsDetails(): Observable<Visit[]> {
    const LoadVisitDb = new Promise<Visit[]>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      db.then(realm => {
        const objects = realm.objects('Visit');
        resolve(VisitMapper.mapToVisit(objects));
      }).catch((error) => reject(error))
    });
    return from(LoadVisitDb);
  }

  LoadAllSites(): Observable<Site[]> {
    const LoadChantierInDb = new Promise<Site[]>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      db.then(realm => {
        const objects = realm.objects('Chantier')
        resolve(SiteMapper.maptoSites(objects));
      }).catch(error => reject(error))
    });
    return from(LoadChantierInDb);
  }

  loadRemarques(): Observable<CustomRemarque[]> {
    const LoadRemarqueDB = new Promise<CustomRemarque[]>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      db.then(realm => {
        const objects = realm.objects('Remarque')
        resolve(RemarqueMapper.mapperToRemarques(objects));
      }).catch(error => reject(error))
    });
    return from(LoadRemarqueDB);
  }

  deleteVisits(): Observable<void> {
    const LoadRemarqueDB = new Promise<void>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      db.then(realm => {
        const objects = realm.objects('Visit');
        realm.write(() => {
          // Delete all items in the visit schema
          realm.delete(objects);
        });
        resolve();
      }).catch(error => reject(error))
    });
    return from(LoadRemarqueDB);
  }
}

