import {StatisticRiskObject} from './StatisticRiskObject';
import Realm from 'realm';

export class StatisticRisk extends Realm.Object<StatisticRisk> {
  risk0?: StatisticRiskObject;
  risk1?: StatisticRiskObject;
  risk2?: StatisticRiskObject;
  riskOthers?: number;

  static schema = {
    name: 'StatisticRisk',
    properties: {
      risk0: 'StatisticRiskObject',
      risk1: 'StatisticRiskObject',
      risk2: 'StatisticRiskObject',
      riskOthers: 'double',
    },
  };
}
