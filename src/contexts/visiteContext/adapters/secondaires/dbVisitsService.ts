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
import CustomRemarque from "@contexts/visiteContext/domain/entity/Remarque";
import { RemarqueMapper } from './mapper/remarque.mapper';
import { Accompagnants } from '@contexts/visiteContext/domain/entity/Accompagnant';
import { AccompagnantMapper } from './mapper/accompagnant.mapper';
import { FlashMapper } from './mapper/flash.mapper';


export class DbVisitsService implements VisitsService {

  SaveFlash(data: VisitFlash): Observable<Remarque> { // Update the return type to Observable<Remarque>

    const currentDateTime = moment();
    const formattedCurrentDateTime = currentDateTime.format("YYYY/MM/DD");
    const name = Date.now().toString() + Math.random().toString();
    const saveFlashtoDb = new Promise<Remarque>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      db.then(realm => {
        realm?.write(() => {
          const newRemarque = realm.create<Remarque>('Remarque', {
            tk: data.id,
            idt: this.generateUUID(name, NAMESPACE),
            idr: this.generateUUID(name, NAMESPACE),
            nbPhoto: data.images?.length,
            ds: data.commentaire,
            pm: data.date,
            photos: data.images,
            nt: false,
            idcs: data.site_id,
            ti: data.commentaire,
            VisiteId: '-1',
            or: 0,
            note: '',
            levee: false,
            VisiteIdLevee: '-1',
            dt: formattedCurrentDateTime,
            dtl: data.site_name,
            ordreGlobal: data.commentaire.length,
            fromObs: false,
            completed: true,
            unq: false,
            lvl: data.level,
            tg: 4,
            qt: this.generateUUID(name, NAMESPACE)
          });
          resolve(newRemarque);
          console.log("🚀 ~ file: dbVisitsService.ts:73 ~ DbVisitsService ~ realm?.write ~ newRemarque:", newRemarque)
        });
      }).catch(error => {
        reject(error);
      });
    });

    return from(saveFlashtoDb);
  }

  SaveVisit(createdVisit: Visit): Observable<Visit> {
    const currentDateTime = moment();
    const formattedCurrentDateTime = currentDateTime.format("YYYY/MM/DD HH:mm:ss");
    const currentDateTimeInMillis = moment().valueOf();
    const saveVisitToDb = new Promise<Visit>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      const name = Date.now().toString() + Math.random().toString();
      // Find the chantier based on createdRemarque.idcs

      db.then((realm) => {
        const user = realm.objects('User');
        const chantier = realm
          .objects('Chantier')
          .filtered(`ref = "${createdVisit.codeChantier}"`)[0];
        const accompagnant = realm
          .objects('Accompagnant')
          .filtered(`em = "${createdVisit.accompagnants!![0].em}"`);
        console.log("🚀 ~ file: dbVisitsService.ts:86 ~ DbVisitsService ~ db.then ~ accompagnant:", accompagnant)
        realm?.write(() => {
          const newVisit = realm.create<Visit>("Visit", {
            // Map Visit properties from data
            id: this.generateUUID(name, NAMESPACE),
            dt: createdVisit.dateStart,
            dtc: currentDateTimeInMillis.toString(),
            date: createdVisit.date,
            timeStamp: currentDateTime.format("DD MMMM YYYY"),
            chantier: chantier,
            codeChantier: createdVisit.codeChantier,
            InfoComplementaire: createdVisit.InfoComplementaire,
            remarques: createdVisit.remarques,
            observations: createdVisit.observations,
            accompagnants: accompagnant,
            V_enCours: 0,
            ordre: 0,
            userId: user[0]?.id,
            dateVisite: createdVisit.dateStart,
            type: createdVisit.type,
          });
          // if (newVisit.remarques) {
          //   console.log('SaveVisit1212',newVisit)
          //   newVisit.remarques.push(createdVisit);
          // }
          console.log('SaveVisitError1212', newVisit)
          resolve(newVisit);
        });
      }).catch((error) => {
        console.log('SaveVisitError1212', error)
        reject(error);
      });

    });

    return from(saveVisitToDb);
  }

  loadFlashsDetails(): Observable<VisitFlash[]> {
    const LoadVisitDb = new Promise<VisitFlash[]>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      db.then(realm => {
        const object1 = realm.objects('Remarque')
        resolve(FlashMapper.mapToVisitRemarqueFlash(object1));
      }).catch((error) => reject(error))
    });
    return from(LoadVisitDb);
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

  loadAccompagnants(): Observable<Accompagnants[]> {
    const LoadAccompagnantsDB = new Promise<Accompagnants[]>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      db.then(realm => {
        const objects = realm.objects('Accompagnant')
        resolve(AccompagnantMapper.mapAccompagnant(objects));
      }).catch(error => reject(error))
    });
    return from(LoadAccompagnantsDB);
  }


  deleteVisits(): Observable<void> {
    const LoadRemarqueDB = new Promise<void>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();

      db.then(realm => {
        const visits = realm.objects('Visit');
        const remarques = realm.objects('Remarque');
        realm.write(() => {
          // Delete all items in the visit schema
          realm.delete(visits);
          realm.delete(remarques)
        });
        resolve();
      }).catch(error => reject(error))



    });
    return from(LoadRemarqueDB);
  }

  private generateUUID(name: string, namespace: string): string {
    return uuidv5(name, namespace) + "an" + moment().valueOf()
  }

}





