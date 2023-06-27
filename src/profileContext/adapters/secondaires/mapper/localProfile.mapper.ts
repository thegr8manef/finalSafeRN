import {User} from '../../../../common/adapters/secondaries/db/entity/User';
import {Profile} from '../../../domain/entity/profile';

export class LocalProfilMapper {
  static mapUserDbToProfile(user: User): Profile {
    console.log(new Profile('', user.fn + '' + user.ln, '', user.em!!));
    return new Profile('', user.fn + ' ' + user.ln, '', user.em!!);
  }
}
