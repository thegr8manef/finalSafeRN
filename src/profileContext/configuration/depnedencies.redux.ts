import {ProfileDependanciesFactory} from './dependencies.factory';

export const profileEpicsDependecies = {
  profileService: ProfileDependanciesFactory.getProfileService(),
  userServices: ProfileDependanciesFactory.userServices(),
};
