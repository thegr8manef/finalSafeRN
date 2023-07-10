import {dashboardService} from '../adapters/secondaires/dashboardService';
import {dbDashboardService} from '../adapters/secondaires/dbDashboardService';
import {DashboardService} from '../domain/gateway/dashboardService';
import {DBDashboardService} from '../domain/gateway/dbDashboardService';

export class DashboardDependanciesFactory {
  static getDashboardService(): DashboardService {
    return new dashboardService();
  }

  static getDBDashboardService(): DBDashboardService {
    return new dbDashboardService();
  }
}
