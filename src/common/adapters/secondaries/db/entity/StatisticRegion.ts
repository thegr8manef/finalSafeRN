import Realm from 'realm';
import {Region} from './Region';
import { SAS } from './SAS';

export class StatisticRegion extends Realm.Object<StatisticRegion> {
  rg?: Region[];
  sas?: SAS[];
  etb?: SAS[];

  static schema = {
    name: 'StatisticRegion',
    properties: {
      rg: 'Region[]',
      sas: 'SAS[]',
      etb: 'SAS[]',
    },
  };
}
