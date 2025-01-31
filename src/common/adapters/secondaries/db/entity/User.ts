import {Accompagnant} from './Accompagnant';
import {Chantier} from './Chantier';
import {Zone} from './Zone';
import Realm from 'realm';

export class User extends Realm.Object<User> {
  id?: string;
  fn?: string;
  ln?: string;
  em?: string;
  rg?: string;
  ss?: string;
  es?: string;
  token?: string;
  connected?: boolean;
  lu?: string;
  luPut?: string;
  vpc?: string;
  vh?: string;
  lr?: boolean;
  visitCreated?: number;
  listChantier?: Chantier[];
  listOthersChantier?: Chantier[];
  listAccompagant?: Accompagnant[];
  listZones?: Zone[];

  static schema = {
    name: 'User',
    primaryKey: 'id',
    properties: {
      id: 'string?',
      fn: 'string?',
      ln: 'string?',
      em: 'string?',
      rg: 'string?',
      ss: 'string?',
      es: 'string?',
      connected: 'bool',
      lu: 'string?',
      luPut: 'string?',
      vpc: 'string?',
      vh: 'string?',
      lr: 'bool',
      token: 'string?',
      visitCreated: 'int',
      listChantier: 'Chantier[]',
      listOthersChantier: 'Chantier[]',
      listAccompagant: 'Accompagnant[]',
      listZones: 'Zone[]',
    },
  };
}
