import Realm from 'realm';
import {Accompagnant} from '@common/adapters/secondaries/db/entity/Accompagnant';
import {Chantier} from '@common/adapters/secondaries/db/entity/Chantier';
import {Photo} from '@common/adapters/secondaries/db/entity/Photo';
import {Remarque} from '@common/adapters/secondaries/db/entity/Remarque';
import {Statistic} from '@common/adapters/secondaries/db/entity/Statistic';
import {StatisticObservation} from '@common/adapters/secondaries/db/entity/StatisticObservation';
import {StatisticRisk} from '@common/adapters/secondaries/db/entity/StatisticRisk';
import {StatisticRiskObject} from '@common/adapters/secondaries/db/entity/StatisticRiskObject';
import {StatisticUser} from '@common/adapters/secondaries/db/entity/StatisticUser';
import {StatisticVisit} from '@common/adapters/secondaries/db/entity/StatisticVisit';
import {Zone} from '@common/adapters/secondaries/db/entity/Zone';
import {User} from '@common/adapters/secondaries/db/entity/User';
import {Visit} from '@common/adapters/secondaries/db/entity/Visit';
import {Observation} from '@common/adapters/secondaries/db/entity/Observation';
import {PointToImprove} from '@common/adapters/secondaries/db/entity/PointToImprove';
import {StrongPoint} from '@common/adapters/secondaries/db/entity/StrongPoint';

export const realmInstance = new Realm({
  schema: [
    User,
    Chantier,
    Zone,
    Remarque,
    Photo,
    Accompagnant,
    Statistic,
    StatisticRisk,
    StatisticVisit,
    StatisticObservation,
    StatisticUser,
    StatisticRiskObject,
    Visit,
    Observation,
    PointToImprove,
    StrongPoint,
  ],
});
