import { FlashPhotoDto } from '@contexts/visiteContext/adapters/secondaires/dto/flash.photo.dto';
import {Photo} from './Photo';
import Realm from 'realm';

export class Remarque extends Realm.Object<Remarque> {
  tk?: string;
  idt?: string;
  idr?: string;
  nbPhoto?: number;
  ds?: string;
  pm?: string;
  photos?: Array<Photo> | FlashPhotoDto[];
  nt?: boolean;
  idcs?: string;
  ti?: string;
  VisiteId?: string;
  or?: number;
  note?: string;
  levee?: boolean;
  VisiteIdLevee?: string;
  dt?: string;
  dtl?: string;
  ordreGlobal?: number;
  fromObs?: boolean;
  completed?: boolean;
  unq?: boolean;
  lvl?: number;
  tg?: number;
  qt?: string;

  static schema = {
    name: 'Remarque',
    primaryKey: 'tk',
    properties: {
      tk: 'string?',
      idt: 'string?',
      idr: 'string?',
      nbPhoto: 'int',
      ds: 'string?',
      pm: 'string?',
      photos: 'Photo[]',
      nt: 'bool',
      idcs: 'string?',
      ti: 'string?',
      VisiteId: 'string?',
      or: 'int',
      note: 'string?',
      levee: 'bool',
      VisiteIdLevee: 'string?',
      dt: 'string?',
      dtl: 'string?',
      ordreGlobal: 'int',
      fromObs: 'bool',
      completed: 'bool',
      unq: 'bool',
      lvl: 'int',
      tg: 'int',
      qt: 'string?',
    },
  };
}
