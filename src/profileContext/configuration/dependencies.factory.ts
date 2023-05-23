import { MsalProfileService } from "../adapters/secondaires/msalProfileService";
import { ProfileService } from "../domain/gateway/profileService";

export class ProfileDependanciesFactory {
    static getProfileService() : ProfileService {
        return new MsalProfileService()
    }
}