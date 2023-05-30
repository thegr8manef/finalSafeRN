import { ProfileDependenciesFactory } from "./dependencies.factory";

export const profileEpicsDependencies = {
  profileService: ProfileDependenciesFactory.getProfileService()
}
