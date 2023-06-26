import {APIProfileService} from '../adapters/secondaires/APIProfileService';
import {UserConnected} from '../adapters/secondaires/UserConnected';
import {ProfileService} from '../domain/gateway/profileService';
import {UserConnectedService} from '../domain/gateway/userConnectedService';

export class ProfileDependanciesFactory {
  static getProfileService(): ProfileService {
    return new APIProfileService();
  }

  static userServices(): UserConnectedService {
    return new UserConnected();
  }
}
