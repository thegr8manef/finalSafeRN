import {Statistic} from './Statistic';
import Realm from 'realm';

export class Zone extends Realm.Object<Zone> {
  id?: string;
  parentId?: string;
  title?: string;
  ordre?: string;
  statisticZone?: Statistic;
  lvl?: number;

  static schema = {
    name: 'Zone',
    primaryKey: 'id',
    properties: {
      id: 'string?',
      parentId: 'string?',
      title: 'string?',
      ordre: 'string?',
      statisticZone: 'Statistic',
      lvl: 'int',
    },
  };
}
