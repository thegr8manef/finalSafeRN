import Realm from 'realm';

export class Photo extends Realm.Object<Photo> {
  id?: string;
  Name?: string;
  path?: string;
  idRemarque?: string;
  idVisite?: string;
  levee?: boolean;
  or?: number;
  formationId?: string;
  wasDrafts?: boolean;
  deleted?: boolean;
  synchEtat?: number;

  static schema = {
    name: 'Photo',
    primaryKey: 'id',
    properties: {
      id: 'string?',
      Name: 'string?',
      path: 'string?',
      idRemarque: 'string?',
      idVisite: 'string?',
      levee: 'bool',
      or: 'int',
      formationId: 'string?',
      wasDrafts: 'bool',
      deleted: 'bool',
      synchEtat: 'int',
    },
  };
}
