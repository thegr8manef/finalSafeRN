import {StatDto} from '../dto/stat.dto';
import {Stat} from '../../../domain/entity/Stat';
import {StatisticRisk} from '@common/adapters/secondaries/db/entity/StatisticRisk';
import {StatisticRiskObject} from '@common/adapters/secondaries/db/entity/StatisticRiskObject';
import {StatisticVisit} from '@common/adapters/secondaries/db/entity/StatisticVisit';
import {Statistic} from '@common/adapters/secondaries/db/entity/Statistic';
import {StatisticObservation} from '@common/adapters/secondaries/db/entity/StatisticObservation';
import {StatisticUser} from '@common/adapters/secondaries/db/entity/StatisticUser';
import {StatRisk} from '../../../domain/entity/statRisk';
import {StatVisit} from '../../../domain/entity/statVisit';
import {StatObservation} from '../../../domain/entity/statObservation';

export class StatMapper {
  static mapStatisticToStat(data: Statistic): Stat {
    const risk0 = {
      label: data.statisticRisk?.risk0?.to,
      value: data.statisticRisk?.risk0?.pct,
    };
    const risk1 = {
      label: data.statisticRisk?.risk1?.to,
      value: data.statisticRisk?.risk1?.pct,
    };
    const risk2 = {
      label: data.statisticRisk?.risk2?.to,
      value: data.statisticRisk?.risk2?.pct,
    };
    const otherRisk = {label: '', value: data.statisticRisk?.riskOthers};
    const statRisk = new StatRisk(risk0, risk1, risk2, otherRisk);
    const statVisit = new StatVisit(
      data.statisticVisit?.vf,
      data.statisticVisit?.vh,
      data.statisticVisit?.vc,
      data.statisticVisit?.vp,
      data.statisticVisit?.tv,
    );
    const statObservation = new StatObservation(
      data.statisticObservation?.ol,
      data.statisticObservation?.onl,
      data.statisticObservation?.oc,
      data.statisticObservation?.op,
      data.statisticObservation?.ocp,
      data.statisticObservation?.onc,
      data.statisticObservation?.on,
      data.statisticObservation?.oncn,
      data.statisticObservation?.to,
      data.statisticObservation?.pol,
    );
    const statUser = data.statisticUser?.tvc;
    const stat = new Stat(
      statRisk,
      statVisit,
      statObservation,
      statUser,
      data.date_synchro,
    );
    return stat;
  }

  static mapRemoteStatsToStat(data: StatDto): Stat {
    const statRisk = this.mapToStatisticRisk(data);
    const statVisit = this.mapToStatisicVisit(data);
    const statObser = data.rd.sob as StatisticObservation;
    const statUser = data.rd.su as StatisticUser;
    const dateSychro = -1;
    const statistic = {
      statisticRisk: statRisk,
      statisticVisit: statVisit,
      statisticObservation: statObser,
      statisticUser: statUser,
      date_synchro: dateSychro,
    } as Statistic;
    return this.mapStatisticToStat(statistic);
  }
  static mapStatToStatistic(data: Stat): Statistic {
    const statisticRisk = {
      risk0: {to: data.statRisk.risk0.label, pct: data.statRisk.risk0.value},
      risk1: {to: data.statRisk.risk1.label, pct: data.statRisk.risk1.value},
      risk2: {to: data.statRisk.risk2.label, pct: data.statRisk.risk2.value},
      riskOthers: data.statRisk.risk3.value,
    } as StatisticRisk;
    const statisticVisit = {
      vf: data.statVisit.visitFlash,
      vh: data.statVisit.visitHierarchical,
      vc: data.statVisit.visitConformity,
      vp: data.statVisit.visitPrevention,
      tv: data.statVisit.visitNumber,
    } as StatisticVisit;
    const statisticObservation = {
      ol: data.statObservation.ol,
      onl: data.statObservation.onl,
      oc: data.statObservation.observationConforme,
      op: data.statObservation.observationPositive,
      ocp: data.statObservation.hintObservation,
      onc: data.statObservation.observationNomConforme,
      on: data.statObservation.observationAmeliorer,
      oncn: data.statObservation.hintLevee,
      to: data.statObservation.observationNumber,
      pol: data.statObservation.leveeDesReservesNumber,
    } as StatisticObservation;
    return {
      statisticRisk,
      statisticVisit,
      statisticObservation,
      statisticUser: {tvc: data.statUser} as StatisticUser,
      date_synchro: data.dateSynchro,
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
