import {StatisticService} from '../domain/gateway/statsticService';
import {StatsRepository} from '../domain/gateway/statsRepository';
import {DBStatsRepository} from '../adapters/secondaires/dbStatsRepository';
import {ApiStatisticService} from '../adapters/secondaires/ApiStatisticService';

export class StatisticDependanciesFactory {
  static getStatisticService(): StatisticService {
    return new ApiStatisticService();
  }

  static getStatsRepository(): StatsRepository {
    return new DBStatsRepository();
  }
}
