import {Chantier} from '@common/adapters/secondaries/db/entity/Chantier';
import {Site} from '@contexts/visiteContext/domain/entity/Site';
import {SynchronisationDto} from '../dto/synchronisationDto';
import {VisitSynchronistaionDto} from '../dto/VisitSynchronistaionDto';
import {Synchronisation} from '@contexts/synchronisationContext/domain/entity/Synchronisation';
import {VisitSynchronisation} from '@contexts/synchronisationContext/domain/entity/VisitSynchronisation';
import {ChantierDto} from '@contexts/visiteContext/adapters/secondaires/dto/chantier.dto';
import {AccompagnantMapper} from '@contexts/visiteContext/adapters/secondaires/mapper/accompagnant.mapper';
import {Visit} from '@contexts/visiteContext/domain/entity/Visit';
import {Accompagnants} from '@contexts/visiteContext/domain/entity/Accompagnant';

export class SynchronisationMapper {
  static mapperToAccompangnant(
    synchronisationDto: SynchronisationDto,
  ): Accompagnants[] {
    return AccompagnantMapper.mapAccompagnant(synchronisationDto.rd.au);
  }

  static mapperToChanties(synchronisationDto: SynchronisationDto): Site[] {
    return [
      ...synchronisationDto.rd.cs.map(chantier =>
        this.mapChantier(chantier, synchronisationDto),
      ),
      ...synchronisationDto.rd.ocs
        .filter(
          chantier =>
            !synchronisationDto.rd.cs.some(
              _chantier => _chantier.id?.toString() === chantier.id.toString(),
            ),
        )
        .map(chantier => this.mapChantier(chantier, synchronisationDto)),
    ];
  }

  static mapChantier(
    chantier: ChantierDto,
    synchronisationDto: SynchronisationDto,
  ): Site {
    const {
      id,
      no,
      ad,
      ac,
      cp,
      py,
      vl,
      st,
      ref,
      ol_name,
      osc,
      pid,
      piid,
      sr,
      org,
    } = chantier;

    return new Site(
      id.toString(),
      no,
      ad || '',
      -1,
      ac,
      cp ? cp.toString() : '',
      py || '',
      vl || '',
      st,
      synchronisationDto.rd.lus ? parseInt(synchronisationDto.rd.lus) : -1,
      [],
      ref,
      ol_name,
      osc,
      pid.toString(),
      piid.toString(),
      sr,
      org || '',
    );
  }

  static mapSiteToChantier(site: Site): Chantier {
    const {
      id,
      name,
      address,
      accepted,
      code_postal,
      pays,
      ville,
      sr,
      st,
      last_update,
      reference,
      region_name,
      osc,
      pid,
      piid,
      org,
    } = site;

    return {
      id: site.id,
      no: site.name,
      ad: site.address,
      type: -1,
      ac: accepted,
      cp: code_postal,
      co: '',
      py: pays,
      vl: ville,
      sr,
      cd: '',
      st: site.st === undefined ? 0 : site.st,
      lu: site.last_update,
      ref: site.reference,
      org: site.org ? site.org.toString() : '',
      ol_name: site.region_name,
      osc: site.osc,
      pid: site.pid.toString(),
      piid: site.piid.toString(),
    } as Chantier;
  }

  static mapperToVisitSynchronisation(
    synchronisation: Synchronisation,
  ): VisitSynchronistaionDto {
    const visites = synchronisation.visites.map(
      (visit: VisitSynchronisation) => {
        return {
          tp: visit.type,
          tk: visit.token,
          cdcs: visit.codeChantie,
          dt: visit.created_At,
          re: {
            dt: visit.remarque.created_At,
            ds: visit.remarque.description,
            tk: visit.remarque.token,
            lvl: visit.remarque.level,
            nt: visit.remarque.note,
          },
        };
      },
    );

    return {
      vs: visites,
    };
  }

  static mapToRemoteVisitDto(visits: Visit[]): VisitSynchronistaionDto {
    const visites = visits.map((visit: Visit) => {
      if (visit.type === 4) {
        this.MapToFlash(visit);
      } else {
        this.MapToFlash(visit);
        //this.MapToVisitCPH(visit)
      }
    });
    return {
      vs: visites,
    };
  }
  static MapToFlash(visit: Visit) {
    return {
      tp: visit.type,
      tk: visit.id,
      cdcs: visit.codeChantier,
      dt: visit.date.toString(),
      // rq: {
      //     dt : visit.remarques!![0].dt,
      //     ds : visit.remarques!![0].ds,
      //     tk : visit.remarques!![0].tk,
      //     lvl: visit.remarques!![0].lvl,
      //     nt : visit.remarques!![0].nt,
      //     md : visit.remarques!![0].md
      // }
    };
  }
  // static MapToVisitCPH(visit:Visit) {
  //   return {
  //     id:visit.id,
  //     dt: visit.date,
  //     dtc:visit.dateCreation,
  //     timeStamp: visit.timeStamp,
  //     date: visit.date,
  //     chantier: visit.getchantier,
  //     codeChantier: visit.codeChantier,
  //     InfoComplementaire : visit.InfoComplementaire,
  //     remarques : {
  //       dt : visit.remarques!![0].dt,
  //       ds : visit.remarques!![0].ds,
  //       tk : visit.remarques!![0].tk,
  //       lvl: visit.remarques!![0].lvl,
  //       nt : visit.remarques!![0].nt,
  //       md : visit.remarques!![0].md
  //     },
  //     observations: {
  //       token: visit.observations!![0].token,
  //       tokenQuestion: visit.observations!![0].tokenQuestion,
  //       parentQuestionToken: visit.observations!![0].parentQuestionToken,
  //       idCS: visit.observations!![0].idCS,
  //       listPhotos: visit.observations!![0].listPhotos,
  //       responseId: visit.observations!![0].responseId,
  //       ordre: visit.observations!![0].ordre,
  //       VId: visit.observations!![0].VId,
  //       commentaire: visit.observations!![0].commentaire,
  //       dt: visit.observations!![0].dt,
  //       title: visit.observations!![0].title,
  //       unq: visit.observations!![0].unq,
  //       remarqueID: visit.observations!![0].remarqueID
  //     },
  //     accompagnants: {
  //       id: visit.accompagnants!![0].id,
  //       fn: visit.accompagnants!![0].fn,
  //       em: visit.accompagnants!![0].em,
  //       ac: visit.accompagnants!![0].ac,
  //       ln: visit.accompagnants!![0].ln,
  //       prId: visit.accompagnants!![0].prId,
  //       ol: visit.accompagnants!![0].ol,
  //       fullnameLowerCase: visit.accompagnants!![0].fullnameLowerCase,
  //       idVisite: visit.accompagnants!![0].idVisite
  //     },
  //     _V_enCours: visit.V_enCours,
  //     pointToImprove: visit.pointToImprove,
  //     strongPoint: visit.strongPoint,
  //     ordre: visit.ordre,
  //     userId: visit.userId,
  //     dateVisite: visit.dateCreation,
  //     type: visit.type
  // };
  // }
}
