import {APIProfileService} from '../adapters/secondaires/APIProfileService';
import {DBUserRepository} from '../adapters/secondaires/DBUserRepository';
import {ProfileService} from '../domain/gateway/profileService';
import {UserRepository} from '../domain/gateway/userReposiory';

export class ProfileDependanciesFactory {
  static getProfileService(): ProfileService {
    return new APIProfileService();
  }

  static getUserRepository(): UserRepository {
    return new DBUserRepository();
  }
}
