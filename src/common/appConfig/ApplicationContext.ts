import Realm, { Configuration } from 'realm';

import { Observation } from '@common/adapters/secondaries/db/entity/Observation';
import { Accompagnant } from '@common/adapters/secondaries/db/entity/Accompagnant';
import { User } from '@common/adapters/secondaries/db/entity/User';
import { Chantier } from '@common/adapters/secondaries/db/entity/Chantier';
import { Remarque } from '@common/adapters/secondaries/db/entity/Remarque';
import { Photo } from '@common/adapters/secondaries/db/entity/Photo';
import { Statistic } from '@common/adapters/secondaries/db/entity/Statistic';
import { StatisticObservation } from '@common/adapters/secondaries/db/entity/StatisticObservation';
import { StatisticRisk } from '@common/adapters/secondaries/db/entity/StatisticRisk';
import { StatisticRiskObject } from '@common/adapters/secondaries/db/entity/StatisticRiskObject';
import { StatisticUser } from '@common/adapters/secondaries/db/entity/StatisticUser';
import { StatisticVisit } from '@common/adapters/secondaries/db/entity/StatisticVisit';
import { Zone } from '@common/adapters/secondaries/db/entity/Zone';
import { StrongPoint } from '@common/adapters/secondaries/db/entity/StrongPoint';
import { PointToImprove } from '@common/adapters/secondaries/db/entity/PointToImprove';
import { Visit } from '@common/adapters/secondaries/db/entity/Visit';

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
      Observation,
      StrongPoint,
      PointToImprove,
      Visit
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
