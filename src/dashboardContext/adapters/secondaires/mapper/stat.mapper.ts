import {StatDto} from '../dto/stat.dto';
import {Stat} from '../../../domain/entity/Stat';
import {StatisticRisk} from '../../../../common/adapters/secondaries/db/entity/StatisticRisk';
import {StatisticRiskObject} from '../../../../common/adapters/secondaries/db/entity/StatisticRiskObject';
import {StatisticVisit} from '../../../../common/adapters/secondaries/db/entity/StatisticVisit';
import {Statistic} from '../../../../common/adapters/secondaries/db/entity/Statistic';
import {StatisticObservation} from '../../../../common/adapters/secondaries/db/entity/StatisticObservation';
import {StatisticUser} from '../../../../common/adapters/secondaries/db/entity/StatisticUser';

export class StatMapper {
  static mapToStat(item: StatDto): Stat {
    const stat = new Stat(
      item.rc,
      item.rd.svt.tv,
      item.rd.sob.to,
      item.rd.sob.pol,
      item.rd.srk['r-0'].pct,
      item.rd.srk['r-1'].pct,
      item.rd.srk['r-2'].pct,
      item.rd.srk.others,
      item.rd.svt.vp,
      item.rd.svt.vc,
      item.rd.svt.vh,
      item.rd.svt.vf,
      item.rd.sob.oc,
      item.rd.sob.op,
      item.rd.sob.onc,
      item.rd.sob.on,
      item.rd.sob.ocp,
      item.rd.sob.oncn,
    );
    return stat;
  }

  static mapToStatDB(item: StatDto): Statistic {
    const statRisk = this.mapToStatisticRisk(item);
    const statVisit = this.mapToStatisicVisit(item);
    const statObser = item.rd.sob as StatisticObservation;
    const statUser = item.rd.su as StatisticUser;
    const stat = -1;

    // create Statistic object
    return {
      statisticRisk: statRisk,
      statisticVisit: statVisit,
      statisticObservation: statObser,
      statisticUser: statUser,
      date_synchro: stat,
    } as Statistic;
  }

  private static mapToStatisticRisk(statObject: StatDto): StatisticRisk {
    const srk0 = {
      to: statObject.rd.srk['r-0'].to,
      pct: statObject.rd.srk['r-0'].pct,
    };

    const srk1 = {
      to: statObject.rd.srk['r-1'].to,
      pct: statObject.rd.srk['r-1'].pct,
    };
    const srk2 = {
      to: statObject.rd.srk['r-2'].to,
      pct: statObject.rd.srk['r-2'].pct,
    };

    const statisticRisk = {
      risk0: srk0 as StatisticRiskObject,
      risk1: srk1 as StatisticRiskObject,
      risk2: srk2 as StatisticRiskObject,
      riskOthers: statObject.rd.srk.others,
    };
    return statisticRisk as StatisticRisk;
  }

  private static mapToStatisicVisit(statObject: StatDto): StatisticVisit {
    return {
      vf: statObject.rd.svt.vf,
      vh: statObject.rd.svt.vh,
      vc: statObject.rd.svt.vc,
      vp: statObject.rd.svt.vp,
      tv: statObject.rd.svt.tv,
    } as StatisticVisit;
  }
}
