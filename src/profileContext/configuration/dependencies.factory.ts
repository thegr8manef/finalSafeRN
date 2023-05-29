import {APIProfileService} from '../adapters/secondaires/APIProfileService';
import {ProfileService} from '../domain/gateway/profileService';

export class ProfileDependanciesFactory {
  static getProfileService(): ProfileService {
    return new APIProfileService();
  }
}
