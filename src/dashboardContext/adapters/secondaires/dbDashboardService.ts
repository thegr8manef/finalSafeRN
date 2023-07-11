import {Observable, from} from 'rxjs';
import {Stat} from '../../domain/entity/Stat';
import {DBDashboardService} from '../../domain/gateway/dbDashboardService';
import ApplicationContext from '../../../common/appConfig/ApplicationContext';
import {StatDto} from './dto/stat.dto';
import {StatMapper} from './mapper/stat.mapper';

export class dbDashboardService implements DBDashboardService {
  loadStatFomLocal(): Observable<Stat> {
    const promisLoadStat = new Promise<Stat>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      try {
        db.then(realm => {
          const objects = realm.objects('Statistic');
          resolve(StatMapper.mapToStat(objects[0]));
        });
      } catch (error) {
        reject(error);
      }
    });

    return from(promisLoadStat);
  }
  saveStatInLocal(stat: StatDto): Observable<void> {
    const promisSaveStat = new Promise<void>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      try {
        db.then(realm => {
          realm?.write(() => {
            realm.create('Statistic', StatMapper.mapToStatDB(stat));
          });
          resolve();
        });
      } catch (error) {
        reject(error);
      }
    });

    return from(promisSaveStat);
  }
}
