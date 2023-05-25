import { Profile } from "../../../domain/entity/profile";
import { ProfileDto } from "../dto/profile.dto";

export class ProfileMapper{

    static mapToProfile(profile : ProfileDto) : Profile{
            return new Profile(
                 profile.tenantId,
                 profile.account.claims.name, 
                 profile.accessToken,
                 profile.account.username)
    }
}