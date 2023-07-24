import {SynchronisationRepository} from '../adapters/secandaires/SynchronisationRepository';
import {synchronisationService} from '../adapters/secandaires/SynchronisationService';
import {SynchronisationRepositoryIDAO} from '../domain/gateway/SynchronisationRepositoryIDAO';
import {SynchronisationService} from '../domain/gateway/SynchronisationService';

export class SynchronisationDependenciesFactory {
  static getSynchronisationService(): SynchronisationService {
    return new synchronisationService();
  }

  static getSynchronisationRepository(): SynchronisationRepositoryIDAO {
    return new SynchronisationRepository();
  }
}
