import {Chantier} from '../../../../adapters/secondaries/db/entity/Chantier';
import {SynchronisationDto} from '../dto/synchronisationDto';

export class SynchronisationMapper {
  static mapperToChanties(synchronisationDto: SynchronisationDto): Chantier[] {
    const chanties: Chantier[] = [];
    synchronisationDto.rd.cs.forEach(chantier => {
      chanties.push({
        id: chantier.id.toString(),
        no: chantier.no,
        ad: chantier.ad,
        type: -1,
        ac: chantier.ac,
        cp: chantier.cp.toString(),
        co: '',
        py: chantier.py,
        vl: chantier.vl,
        sr: chantier.sr,
        cd: '',
        lu: parseInt(synchronisationDto.rd.lus),
        st: chantier.st,
        ref: chantier.ref,
        org: chantier.org.toString(),
        ol_name: chantier.ol_name,
        osc: chantier.osc,
        pid: chantier.pid.toString(),
        piid: chantier.piid.toString(),
      } as Chantier);
    });

    synchronisationDto.rd.ocs.forEach(chantier => {
      if (
        !chanties.some(
          _chantier => _chantier.id?.toString() == chantier.id.toString(),
        )
      ) {
        chanties.push({
          id: chantier.id.toString(),
          no: chantier.no,
          ad: chantier.ad,
          type: -1,
          ac: chantier.ac,
          cp: '',
          co: '',
          py: chantier.py,
          vl: chantier.vl,
          sr: chantier.sr,
          cd: '',
          lu: parseInt(synchronisationDto.rd.lus),
          st: -1,
          ref: chantier.ref,
          org: chantier.org.toString(),
          ol_name: chantier.ol_name,
          osc: chantier.osc.toString(),
          pid: chantier.pid.toString(),
          piid: chantier.piid.toString(),
        } as Chantier);
      }
    });

    return chanties;
  }
}
