import {DashboardDependanciesFactory} from './dependencies.factory';

export const dashboardEpicsDependecies = {
  dashboardService: DashboardDependanciesFactory.getDashboardService(),
  stateRepository: DashboardDependanciesFactory.getDBStatRepository(),
};
