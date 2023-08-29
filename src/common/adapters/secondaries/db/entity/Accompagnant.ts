import Realm from 'realm';

export class Accompagnant extends Realm.Object<Accompagnant> {
  id?: string;
  fn?: string;
  ln?: string;
  em?: string;
  idVisite?: string;
  fullnameLowerCase?: string;
  ac?: boolean;
  ol?: string;
  prId?: string;

  static schema = {
    name: 'Accompagnant',
    primaryKey: 'id',
    properties: {
      id: 'string?',
      fn: 'string?',
      ln: 'string?',
      em: 'string?',
      idVisite: 'string?',
      fullnameLowerCase: 'string?',
      ac: 'bool',
      ol: 'string?',
      prId: 'string?',
    },
  };
}
