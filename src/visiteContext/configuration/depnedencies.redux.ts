import {VisitsDependanciesFactory} from './dependencies.factory';

export const visitsEpicsDependecies = {
  visitsService: VisitsDependanciesFactory.getVisitsService(),
  searchChantierService: VisitsDependanciesFactory.getChantierByCodeService(),
};
