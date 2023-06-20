export class StatisticObservation extends Realm.Object<StatisticObservation> {
  ol?: number;
  onl?: number;
  oc?: number;
  op?: number;
  ocp?: number;
  onc?: number;
  on?: number;
  oncn?: number;
  to?: number;
  pol?: number;

  static schema = {
    name: 'StatisticObservation',
    properties: {
      ol: 'int',
      onl: 'int',
      oc: 'int',
      op: 'int',
      ocp: 'int',
      onc: 'int',
      on: 'int',
      oncn: 'int',
      to: 'int',
      pol: 'double',
    },
  };
}
