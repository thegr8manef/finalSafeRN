import {dashboardService} from '../adapters/secondaires/dashboardService';
import {DashboardService} from '../domain/gateway/dashboardService';

export class DashboardDependanciesFactory {
  static getDashboardService(): DashboardService {
    return new dashboardService();
  }
}
