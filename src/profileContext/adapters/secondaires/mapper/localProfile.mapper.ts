import {User} from '../../../../common/adapters/secondaries/db/entity/User';
import {Profile} from '../../../domain/entity/profile';

export class LocalProfilMapper {
  static mapUserDbToProfile(user: User): Profile {
    return new Profile(
      '',
      user?.fn + '' + user?.ln,
      user?.token ?? '',
      user?.em ?? '',
    );
  }
}
