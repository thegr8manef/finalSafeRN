import {APIProfileService} from '../adapters/secondaires/APIProfileService';
import {DBUserService} from '../adapters/secondaires/DBUserService';
import {ProfileService} from '../domain/gateway/profileService';
import {UserService} from '../domain/gateway/userService';

export class ProfileDependanciesFactory {
  static getProfileService(): ProfileService {
    return new APIProfileService();
  }

  static DBUserService(): UserService {
    return new DBUserService();
  }
}
