import {DashboardDependanciesFactory} from './dependencies.factory';

export const dashboardEpicsDependecies = {
  dashboardService: DashboardDependanciesFactory.getDashboardService(),
  dbDashboardService: DashboardDependanciesFactory.getDBDashboardService(),
};
