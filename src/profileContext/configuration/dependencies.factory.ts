import {APIProfileService} from '../adapters/secondaires/APIProfileService';
import {CheckUserConnected} from '../adapters/secondaires/CheckUserConnected';
import {ProfileService} from '../domain/gateway/profileService';
import {UserConnectedService} from '../domain/gateway/userConnectedService';

export class ProfileDependanciesFactory {
  static getProfileService(): ProfileService {
    return new APIProfileService();
  }

  static checkUserService(): UserConnectedService {
    return new CheckUserConnected();
  }
}
