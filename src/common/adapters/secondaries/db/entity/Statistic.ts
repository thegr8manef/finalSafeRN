import {StatisticObservation} from './StatisticObservation';
import {StatisticRisk} from './StatisticRisk';
import {StatisticUser} from './StatisticUser';
import {StatisticVisit} from './StatisticVisit';
import Realm from 'realm';

export class Statistic extends Realm.Object<Statistic> {
  statisticRisk?: StatisticRisk;
  statisticVisit?: StatisticVisit;
  statisticObservation?: StatisticObservation;
  statisticUser?: StatisticUser;
  date_synchro?: number;

  static schema = {
    name: 'Statistic',
    properties: {
      statisticRisk: 'StatisticRisk',
      statisticVisit: 'StatisticVisit',
      statisticObservation: 'StatisticObservation',
      statisticUser: 'StatisticUser',
      date_synchro: 'int',
    },
  };
}
