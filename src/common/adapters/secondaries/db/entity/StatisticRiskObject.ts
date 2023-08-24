import Realm from 'realm';

export class StatisticRiskObject extends Realm.Object<StatisticRiskObject> {
  to?: string;
  pct?: number;

  static schema = {
    name: 'StatisticRiskObject',
    properties: {
      to: 'string?',
      pct: 'double',
    },
  };
}
