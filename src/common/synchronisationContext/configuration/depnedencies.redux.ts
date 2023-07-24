import {SynchronisationDependenciesFactory} from './dependencies.factory';

export const synchronisationEpicsDependencies = {
  synchronisationService:
    SynchronisationDependenciesFactory.getSynchronisationService(),
  synchronisationRepository:
    SynchronisationDependenciesFactory.getSynchronisationRepository(),
};
