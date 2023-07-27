import {FlashPhotoDto} from './flash.photo.dto';

export interface FlashDto {
  tk?: string;
  idt?: string;
  idr?: string;
  nbPhoto?: number; // 0
  ds?: string; //Commentaire
  pm?: string; // empty
  photos?: Array<FlashPhotoDto>;
  nt?: boolean; // false
  idcs?: string; //1870 or 666
  ti?: string; //Commentaire
  VisiteId?: string; // -1
  or?: number; // 0
  note?: string; // null
  levee?: boolean; //false
  VisiteIdLevee?: string; // -1
  dt?: string; //date of the syncho of observation
  dtl?: string; //date of the creaction of observation
  ordreGlobal?: number;
  fromObs?: boolean; // false
  completed?: boolean; //true
  unq?: boolean;
  lvl?: number; //level of flash observation radio
  tg?: number;
  qt?: string; //null
}
