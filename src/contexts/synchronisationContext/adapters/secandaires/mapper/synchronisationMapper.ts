import { Chantier } from '@common/adapters/secondaries/db/entity/Chantier';
import { Site } from '@contexts/visiteContext/domain/entity/Site';
import { SynchronisationDto } from '../dto/synchronisationDto';

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
      id,
      no: name,
      ad: address,
      type: -1,
      ac: accepted,
      cp: code_postal,
      co: '',
      py: pays,
      vl: ville,
      sr,
      cd: '',
      st: st === undefined ? 0 : st,
      lu: last_update,
      ref: reference,
      org: org || '',
      ol_name: region_name,
      osc,
      pid: pid.toString(),
      piid: piid.toString(),
    };
  }
}
