import {dashboardService} from '../adapters/secondaires/dashboardService';
import {dbStatRepository} from '../adapters/secondaires/dbStatRepository';
import {DashboardService} from '../domain/gateway/dashboardService';
import {DBStatRepository} from '../domain/gateway/DBStatRepository';

export class DashboardDependanciesFactory {
  static getDashboardService(): DashboardService {
    return new dashboardService();
  }

  static getDBStatRepository(): DBStatRepository {
    return new dbStatRepository();
  }
}
