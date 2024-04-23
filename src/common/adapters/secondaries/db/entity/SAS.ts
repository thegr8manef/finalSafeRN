import Realm from 'realm';
import { Region } from './Region';

export class SAS extends Realm.Object<Region> {
  id?: number;
  ti?: string;
  pid?: number;
  piid?: number;
  or?: number;
  lvl?: number;

  static schema = {
    name: 'SAS',
    properties: {
      id: 'int?',
      ti: 'string?',
      pid: 'int?',
      piid: 'int?',
      or: 'int?',
      lvl: 'int?',
    },
  };
}
