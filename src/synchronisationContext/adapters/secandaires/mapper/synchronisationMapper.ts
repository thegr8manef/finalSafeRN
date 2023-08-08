import {Chantier} from '../../../../common/adapters/secondaries/db/entity/Chantier';
import {Site} from '../../../../visiteContext/domain/entity/Site';
import {SynchronisationDto} from '../dto/synchronisationDto';

export class SynchronisationMapper {
  static mapperToChanties(synchronisationDto: SynchronisationDto): Site[] {
    const chanties: Site[] = [];
    synchronisationDto.rd.cs.forEach(chantier => {
      chanties.push(
        new Site(
          chantier.id.toString(),
          chantier.no,
          chantier.ad ? chantier.ad : '',
          -1,
          chantier.ac,
          chantier.cp ? chantier.cp.toString() : '',
          chantier.py ? chantier.py : '',
          chantier.vl ? chantier.vl : '',
          chantier.sr,
          synchronisationDto.rd.lus ? parseInt(synchronisationDto.rd.lus) : -1,
          [],
          chantier.ref,
          chantier.ol_name,
          chantier.osc,
          chantier.pid.toString(),
          chantier.piid.toString(),
        ),
      );
    });

    synchronisationDto.rd.ocs.forEach(chantier => {
      if (
        !chanties.some(
          _chantier => _chantier.id?.toString() == chantier.id.toString(),
        )
      ) {
        chanties.push(
          new Site(
            chantier.id.toString(),
            chantier.no,
            chantier.ad ? chantier.ad : '',
            -1,
            chantier.ac,
            '',
            chantier.py ? chantier.py : '',
            chantier.vl ? chantier.vl : '',
            chantier.sr,
            synchronisationDto.rd.lus
              ? parseInt(synchronisationDto.rd.lus)
              : -1,
            [],
            chantier.ref,
            chantier.ol_name,
            chantier.osc.toString(),
            chantier.pid.toString(),
            chantier.piid.toString(),
          ),
        );
      }
    });

    return chanties;
  }

  static mapperToDBChanties(
    synchronisationDto: SynchronisationDto,
  ): Chantier[] {
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
