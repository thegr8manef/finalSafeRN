import {connectionRepository} from '../adapters/secondaires/connectionRepository';
import {ConnectionRepository} from '../domain/gateway/ConnectionRepository';

export class ConnectionDependanciesFactory {
  static getConnectionRepository(): ConnectionRepository {
    return new connectionRepository();
  }
}
