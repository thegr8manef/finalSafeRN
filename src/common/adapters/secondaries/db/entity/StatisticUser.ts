export class StatisticUser extends Realm.Object<StatisticUser> {
  tvc?: number;

  static schema = {
    name: 'StatisticUser',
    properties: {
      tvc: 'int',
    },
  };
}
