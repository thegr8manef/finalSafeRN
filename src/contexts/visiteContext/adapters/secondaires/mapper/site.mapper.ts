import {Chantier} from '@common/adapters/secondaries/db/entity/Chantier';
import {Site} from '../../../domain/entity/Site';

export class SiteMapper {
  static maptoSite(chantier: Chantier): Site {
    // return new Chantier(
    //   chantier.id,
    //   chantier.no,
    //   chantier.ad,
    //   chantier.type,
    //   chantier.ac,
    //   chantier.cp,
    //   chantier.py,
    //   chantier.vl,
    //   chantier.sr,
    //   chantier.cd,
    //   chantier.st,
    //   chantier.lu,
    //   chantier.remarques,
    //   chantier.ref,
    //   chantier.org,
    //   chantier.ol_name,
    //   chantier.osc,
    //   chantier.pid,
    //   chantier.piid,
    // );
    return new Site(
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
    );
  }
}
