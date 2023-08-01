import {Chantier} from '../../../domain/entity/Chantier';
import {Flash} from '../../../domain/entity/Flash';
import {ChantierDto} from '../dto/chantier.dto';

export class ChantierMapper {
  static maptoChantier(chantier: ChantierDto): Chantier {
    console.log(chantier);
    return new Chantier(
      chantier.id.toString(),
      chantier.no,
      chantier.ad,
      -1,
      chantier.ac,
      chantier.cp.toString(),
      chantier.py,
      chantier.vl,
      chantier.st,
      -1,
      [],
      chantier.ref,
      chantier.ol_name,
      chantier.osc,
      chantier.pid.toString(),
      chantier.piid.toString(),
    );
  }
}
