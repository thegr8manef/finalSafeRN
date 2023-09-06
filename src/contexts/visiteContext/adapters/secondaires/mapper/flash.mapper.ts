import { VisitFlash } from '@contexts/visiteContext/domain/entity/VisitFlash';
import { FlashDto } from './../dto/flash.dto';

export class FlashMapper {
  static mapTodb(item: VisitFlash): FlashDto {
    // todo: fix FlashDto interface to a class or replace it to an object
    const flash: FlashDto = {
      tk: item.tk,
      idt: item.idt,
      idr: item.idr,
      nbPhoto: item.nbPhoto,
      ds: item.ds,
      pm: item.pm,
      photos: item.photos,
      nt: item.nt,
      idcs: item.idcs,
      ti: item.ti,
      VisiteId: item.VisiteId,
      or: item.or,
      note: item.note,
      levee: item.levee,
      VisiteIdLevee: item.VisiteIdLevee,
      dt: item.dt,
      dtl: item.dtl,
      ordreGlobal: item.ordreGlobal,
      fromObs: item.fromObs,
      completed: item.completed,
      unq: item.unq,
      lvl: item.lvl,
      tg: item.tg,
      qt: item.qt,
    };
    return flash;
  }
}
