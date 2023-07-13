import {connectionRepository} from '../adapters/secondaires/connectionRepository';
import {ConnectionRepository} from '../domain/geteway/ConnectionRepository';

export class ConnectionDependanciesFactory {
  static getConnectionRepository(): ConnectionRepository {
    return new connectionRepository();
  }
}
