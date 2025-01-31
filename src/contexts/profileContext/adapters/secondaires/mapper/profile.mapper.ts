import {Profile} from '../../../domain/entity/profile';
import {User} from '../../../domain/entity/user';
import {ProfileDto, userDto} from '../dto/profile.dto';

export class ProfileMapper {
  static mapToProfile(profile: ProfileDto): Profile {
    return new Profile(
      profile.tenantId,
      profile.account.claims.name,
      profile.accessToken,
      profile.account.username,
      '',
      '-1',
    );
  }

  static mapToProfileDetails(userDetails: userDto): User {
    return new User('', userDetails.rd.or.rg, '-1');
  }
}
