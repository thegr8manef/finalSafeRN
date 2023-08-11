import {DBSynchronisationRepository} from '../adapters/secandaires/DBSynchronisationRepository';
import {APISynchronisationService} from '../adapters/secandaires/APISynchronisationService';
import {SynchronisationRepository} from '../domain/gateway/SynchronisationRepository';
import {SynchronisationService} from '../domain/gateway/SynchronisationService';

export class SynchronisationDependenciesFactory {
  static getSynchronisationService(): SynchronisationService {
    return new APISynchronisationService();
  }

  static getSynchronisationRepository(): SynchronisationRepository {
    return new DBSynchronisationRepository();
  }
}
