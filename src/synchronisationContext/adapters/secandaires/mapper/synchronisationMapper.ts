
import { Chantier } from '../../../../visiteContext/domain/entity/Site';
import {SynchronisationDto} from '../dto/synchronisationDto';

export class SynchronisationMapper {
  static mapperToChanties(synchronisationDto: SynchronisationDto): Chantier[] {
    const chanties: Chantier[] = [];
    synchronisationDto.rd.cs.forEach(chantier => {
      chanties.push(new Chantier(
       chantier.id.toString(),
      chantier.no,
       chantier.ad ? chantier.ad : '',
      -1,
       chantier.ac,
       chantier.cp ? chantier.cp.toString(): '',
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
     ))
    });

    synchronisationDto.rd.ocs.forEach(chantier => {
      if (
        !chanties.some(
          _chantier => _chantier.id?.toString() == chantier.id.toString(),
        )
      ) {
        chanties.push(new Chantier(
          chantier.id.toString(),
         chantier.no,
          chantier.ad ? chantier.ad : '',
         -1,
          chantier.ac,
          '',
           chantier.py ? chantier.py : '',
           chantier.vl ? chantier.vl: '',
          chantier.sr,
          synchronisationDto.rd.lus ? parseInt(synchronisationDto.rd.lus): -1,
         [],
          chantier.ref,
            chantier.ol_name,
            chantier.osc.toString(),
           chantier.pid.toString(),
         chantier.piid.toString(),
        ));
      }
    });

    return chanties;
  }
}
