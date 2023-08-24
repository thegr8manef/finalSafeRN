import Realm from 'realm';

export class StatisticVisit extends Realm.Object<StatisticVisit> {
  vf?: number;
  vh?: number;
  vc?: number;
  vp?: number;
  tv?: number;

  static schema = {
    name: 'StatisticVisit',
    properties: {
      vf: 'int',
      vh: 'int',
      vc: 'int',
      vp: 'int',
      tv: 'int',
    },
  };
}
