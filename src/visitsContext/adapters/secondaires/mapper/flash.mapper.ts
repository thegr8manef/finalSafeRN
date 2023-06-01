import {Flash} from '../../../domain/entity/Flash';
import {FlashDto} from '../dto/flash.dto';

export class FlashMapper {
  static mapToStat(item: FlashDto): Flash {
    const flash = new Flash();
    return flash;
  }
}
