import {Chantier} from '@common/adapters/secondaries/db/entity/Chantier';
import {Site} from '../../../domain/entity/Site';

export class SiteMapper {
  static maptoSites(chantiers: Chantier[]): Site[] {
    return chantiers.map(chantier =>new Site(
      chantier.id,
      chantier.no,
      chantier.ad,
      chantier.type,
      chantier.ac,
      chantier.cp,
      chantier.py,
      chantier.vl,
      chantier.st,
      chantier.lu,
      chantier.remarques,
      chantier.ref,
      chantier.ol_name,
      chantier.osc,
      chantier.pid,
      chantier.piid,
      chantier.sr,
      chantier.org
    ));
  }
}
