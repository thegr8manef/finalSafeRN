import RNFS from 'react-native-fs';
import Realm, {Configuration} from 'realm';
import {User} from '../adapters/secondaries/db/entity/User';
import {Chantier} from '../adapters/secondaries/db/entity/Chantier';
import {Remarque} from '../adapters/secondaries/db/entity/Remarque';
import {Photo} from '../adapters/secondaries/db/entity/Photo';
import {Accompagnant} from '../adapters/secondaries/db/entity/Accompagnant';
import {Statistic} from '../adapters/secondaries/db/entity/Statistic';
import {StatisticObservation} from '../adapters/secondaries/db/entity/StatisticObservation';
import {StatisticRisk} from '../adapters/secondaries/db/entity/StatisticRisk';
import {StatisticRiskObject} from '../adapters/secondaries/db/entity/StatisticRiskObject';
import {StatisticUser} from '../adapters/secondaries/db/entity/StatisticUser';
import {StatisticVisit} from '../adapters/secondaries/db/entity/StatisticVisit';
import {Zone} from '../adapters/secondaries/db/entity/Zone';
import realm_config from '../../config/realm-config';

class ApplicationContext {
  private static instance: ApplicationContext;
  private _db: Promise<Realm>;

  private static realmConfigDB: Configuration = {
    schema: [
      Accompagnant,
      User,
      Chantier,
      Remarque,
      Photo,
      Statistic,
      StatisticObservation,
      StatisticRisk,
      StatisticRiskObject,
      StatisticUser,
      StatisticVisit,
      Zone,
    ],
    schemaVersion: 15,
    //encryptionKey: this.toByteArray(realm_config.databaseKey),
  };

  static getInstance(): ApplicationContext {
    if (!ApplicationContext.instance) {
      ApplicationContext.instance = new ApplicationContext();

      ApplicationContext.instance._db = Realm.open(
        ApplicationContext.realmConfigDB,
      );

      return ApplicationContext.instance;
    }
    return ApplicationContext.instance;
  }

  db(): Promise<Realm> {
    return this._db;
  }

  private static toByteArray(str: string): Int8Array {
    const array = new Int8Array(str.length);
    let i = 0;
    for (i; i < str.length; i++) {
      array[i] = str.charCodeAt(i);
    }
    return array;
  }
}

export default ApplicationContext;
