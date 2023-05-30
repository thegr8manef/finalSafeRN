import {StatDto} from '../dto/stat.dto';
import {Stat} from '../../../domain/entity/Stat';

export class StatMapper {
  static mapToStat(item: StatDto): Stat {
    const stat = new Stat(
      item.rc,
      item.rd.svt.tv,
      item.rd.sob.to,
      item.rd.sob.pol,
      item.rd.srk["r-0"].pct,
      item.rd.srk["r-1"].pct,
      item.rd.srk["r-2"].pct,
      item.rd.srk.others,
      item.rd.svt.vp,
      item.rd.svt.vc,
      item.rd.svt.vh,
      item.rd.svt.vf,
      item.rd.sob.oc,
      item.rd.sob.op,
      item.rd.sob.onc,
      item.rd.sob.on,
      item.rd.sob.ocp,
      item.rd.sob.oncn,
    );
    return stat;
  }
}
