import { Chantier } from '@common/adapters/secondaries/db/entity/Chantier';
import { Site } from '@contexts/visiteContext/domain/entity/Site';
import { SynchronisationDto } from '../dto/synchronisationDto';
import { VisitSynchronistaionDto } from '../dto/VisitSynchronistaionDto';
import { Synchronisation } from '@contexts/synchronisationContext/domain/entity/Synchronisation';
import { VisitSynchronisation } from '@contexts/synchronisationContext/domain/entity/VisitSynchronisation';
import { Visit } from '@contexts/visiteContext/domain/entity/Visit';

export class SynchronisationMapper {
  static mapperToChanties(synchronisationDto: SynchronisationDto): Site[] {
    return [
      ...synchronisationDto.rd.cs.map(chantier => this.mapChantier(chantier, synchronisationDto)),
      ...synchronisationDto.rd.ocs.filter(chantier =>
        !synchronisationDto.rd.cs.some(_chantier => _chantier.id?.toString() === chantier.id.toString())
      ).map(chantier => this.mapChantier(chantier, synchronisationDto))
    ];
  }

  static mapChantier(chantier: any, synchronisationDto: SynchronisationDto): Site {
    const {
      id, no, ad, ac, cp, py, vl, st, ref, ol_name, osc, pid, piid, sr, org
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
      org || ''
    );
  }

  static mapSiteToChantier(site: Site): Chantier {
    const {
      id, name, address, accepted, code_postal, pays, ville, sr,
      st, last_update, reference, region_name, osc, pid, piid, org
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
      org: site.org ? site.org.toString() : "",
      ol_name: site.region_name,
      osc: site.osc,
      pid: site.pid.toString(),
      piid: site.piid.toString(),
    } as Chantier;
  }

  static mapperToVisitSynchronisation(synchronisation: Synchronisation): VisitSynchronistaionDto {
    const visites = synchronisation.visites.map((visit: VisitSynchronisation) => {
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
        }
      };
    });

    return {
      vs: visites
    };
  }

static mapToRemoteVisitDto(visits : Visit[]) : VisitSynchronistaionDto{
  const visites = visits.map((visit: Visit) => {
    return {
        tp: visit.tp,
        tk: visit.tk,
        cdcs: visit.cdc,
        dt: visit.dt, 
        rq: {
            dt : visit.rq!![0].dt, 
            ds : visit.rq!![0].ds,
            tk : visit.rq!![0].tk,
            lvl: visit.rq!![0].lvl,
            nt : visit.rq!![0].nt,
            md : []
        }
    };
});

      return {
                vs: visites
            };
 }


}
