import {StatisticDependanciesFactory} from './dependencies.factory';

export const statisticEpicsDependecies = {
  statisticService: StatisticDependanciesFactory.getStatisticService(),
  statsRepository: StatisticDependanciesFactory.getStatsRepository(),
};
