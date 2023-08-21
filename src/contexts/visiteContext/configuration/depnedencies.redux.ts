import {VisitsDependanciesFactory} from './dependencies.factory';

export const visitsEpicsDependecies = {
  visitsService: VisitsDependanciesFactory.getVisitsService(),
  visitsRepository : VisitsDependanciesFactory.getVisitRepository()
};
