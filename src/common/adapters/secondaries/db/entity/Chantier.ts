import {Remarque} from './Remarque';
import Realm from 'realm';

export class Chantier extends Realm.Object<Chantier> {
  id?: string;
  no?: string;
  ad?: string;
  type?: number;
  ac?: boolean;
  cp?: string;
  co?: string;
  py?: string;
  vl?: string;
  sr?: number;
  cd?: string;
  st?: number;
  lu?: number;
  remarques?: Remarque[];
  ref?: string;
  org?: string;
  ol_name?: string;
  osc?: string;
  pid?: string;
  piid?: string;

  static schema = {
    name: 'Chantier',
    primaryKey: 'id',
    properties: {
      id: 'string?',
      no: 'string?',
      ad: 'string?',
      type: 'int',
      ac: 'bool',
      cp: 'string?',
      co: 'string?',
      py: 'string?',
      vl: 'string?',
      sr: 'int',
      cd: 'string?',
      st: 'int',
      lu: 'int',
      remarques: 'Remarque[]',
      ref: 'string?',
      org: 'string?',
      ol_name: 'string?',
      osc: 'string?',
      pid: 'string?',
      piid: 'string?',
    },
  };
}
