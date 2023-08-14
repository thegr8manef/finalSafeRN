import {Flash} from '../../../domain/entity/Flash';
import {FlashDto} from '../dto/flash.dto';

export class FlashMapper {
  static mapTodb(item: Flash): FlashDto {
    const flash = new FlashDto(
      item.tk,
      item.idt,
      item.idr,
      item.nbPhoto,
      item.ds,
      item.pm,
      item.photos,
      item.nt,
      item.idcs,
      item.ti,
      item.VisiteId,
      item.or,
      item.note,
      item.levee,
      item.VisiteIdLevee,
      item.dt,
      item.dtl,
      item.ordreGlobal,
      item.fromObs,
      item.completed,
      item.unq,
      item.lvl,
      item.tg,
      item.qt,
    );
    return flash;
  }
}
