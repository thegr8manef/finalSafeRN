import { Observable, from } from 'rxjs';
import { Stat } from '../../domain/entity/Stat';
import ApplicationContext from '@common/appConfig/ApplicationContext';
import { StatMapper } from './mapper/stat.mapper';
import { StatsRepository } from '../../domain/gateway/statsRepository';

export class DBStatsRepository implements StatsRepository {
  loadLocalStats(): Observable<Stat> {
    const promisLoadStat = new Promise<Stat>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      db.then(realm => {
        const objects = realm.objects('Statistic');        
        resolve(StatMapper.mapStatisticToStat(objects[0]));
      }).catch(error => reject(error))
    });

    return from(promisLoadStat);
  }
  saveStats(stat: Stat): Observable<void> {
    const promisSaveStat = new Promise<void>((resolve, reject) => {
      const db = ApplicationContext.getInstance().db();
      db.then(realm => {
        realm?.write(() => {          
          realm.create('Statistic', StatMapper.mapStatToStatistic(stat));
        });
        resolve();
      }).catch(error => reject(error))
    });

    return from(promisSaveStat);
  }
}
