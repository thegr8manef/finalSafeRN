import {dashboardService} from '../adapters/secondaires/dashboardService';
import {dbStatRepository} from '../adapters/secondaires/dbStatRepository';
import {DashboardService} from '../domain/gateway/dashboardService';
import {DBDashboardService} from '../domain/gateway/dbDashboardService';

export class DashboardDependanciesFactory {
  static getDashboardService(): DashboardService {
    return new dashboardService();
  }

  static getDBStatRepository(): DBDashboardService {
    return new dbStatRepository();
  }
}
