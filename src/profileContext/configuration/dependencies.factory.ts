import {APIProfileService} from '../adapters/secondaires/APIProfileService';
import {DBUserService} from '../adapters/secondaires/DBUserService';
import {ProfileService} from '../domain/gateway/profileService';
import {UserConnectedService} from '../domain/gateway/userConnectedService';

export class ProfileDependanciesFactory {
  static getProfileService(): ProfileService {
    return new APIProfileService();
  }

  static DBUserService(): UserConnectedService {
    return new DBUserService();
  }
}
