import {Chantier} from '@common/adapters/secondaries/db/entity/Chantier';
import {Site} from '@contexts/visiteContext/domain/entity/Site';
import {SynchronisationDto} from '../dto/synchronisationDto';
import { VisitSynchronistaionDto } from '../dto/VisitSynchronistaionDto';
import { Synchronisation } from '@contexts/synchronisationContext/domain/entity/Synchronisation';
import { VisitSynchronisation } from '@contexts/synchronisationContext/domain/entity/VisitSynchronisation';
import { ChantierDto } from '@contexts/visiteContext/adapters/secondaires/dto/chantier.dto';

export class SynchronisationMapper {
  static mapperToChanties(synchronisationDto: SynchronisationDto): Site[] {
    return [
      ...synchronisationDto.rd.cs.map(chantier => this.mapChantier(chantier, synchronisationDto)),
      ...synchronisationDto.rd.ocs.filter(chantier =>
        !synchronisationDto.rd.cs.some(_chantier => _chantier.id?.toString() === chantier.id.toString())
      ).map(chantier => this.mapChantier(chantier, synchronisationDto))
    ];
  }

  static mapChantier(chantier: ChantierDto, synchronisationDto: SynchronisationDto): Site {
    const {
      id, no, ac,co,sr, st, cp,ad, rq, ref, org, ol_name,
      osc, pid, piid
    } = chantier;

    return new Site(
      id.toString(),
      no,
      ad || '',
      -1,
      ac,
      cp,
      co,
      '',
      st,
      -1,
      rq,
      ref,
      ol_name,
      osc === 'true', // Convert to boolean
      pid.toString(),
      piid.toString(),
      sr,
      org.toString()
    );
  }

  static mapSiteToChantier(site: Site): Chantier {

    return {
      id:site.id,
      no: site.name,
      ad: site.address,
      type: -1,
      ac: site.accepted,
      cp: site.code_postal,
      co: '',
      py: site.pays.toString(),
      vl: site.ville.toString(),
      sr: site.sr,
      cd: '',
      st: site.st === undefined ? 0: site.st,
      lu: site.last_update,
      ref: site.reference,
      org: site.org ? site.org.toString() : "",
      ol_name: site.region_name,
      osc: site.osc.toString(),
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


}
