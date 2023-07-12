import {Observable, from} from 'rxjs';
import {Stat} from '../../domain/entity/Stat';
import {DBDashboardService} from '../../domain/gateway/dbDashboardService';
import ApplicationContext from '../../../common/appConfig/ApplicationContext';
import {StatDto} from './dto/stat.dto';
import {StatMapper} from './mapper/stat.mapper';
import {Statistic} from '../../../common/adapters/secondaries/db/entity/Statistic';

export class dbStatRepository implements dbStatRepository {
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
  saveStatInLocal(stat: Statistic): Observable<void> {
    const promisSaveStat = new Promise<void>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      try {
        db.then(realm => {
          realm?.write(() => {
            realm.create('Statistic', stat);
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
