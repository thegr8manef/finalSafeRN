import { FlashPhotoDto } from '@contexts/visiteContext/adapters/secondaires/dto/flash.photo.dto';
import { Photo } from './Photo';

export class VisitFlash {
  tk: string;
  idt: string;
  idr: string;
  nbPhoto: number;
  ds: string;
  pm: string;
  photos: FlashPhotoDto[];
  nt: boolean;
  idcs: string;
  ti: string;
  VisiteId: string;
  or: number;
  note: string;
  levee: boolean;
  VisiteIdLevee: string;
  dt: string;
  dtl: string;
  ordreGlobal: number;
  fromObs: boolean;
  completed: boolean;
  unq: boolean;
  lvl: number;
  tg: number;
  qt: string;

  constructor(
    private _id : string,
    private _commentaire: string,
    private _images: Photo[],
    private _level: number,
    private _site_id: string,
    private _type: number,
  ) { }
  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }
  public get site_id(): string {
    return this._site_id;
  }
  public set site_id(value: string) {
    this._site_id = value;
  }
  get commentaire(): string {
    return this._commentaire;
  }
  get images(): Photo[] {
    return this._images;
  }
  get level(): number {
    return this._level;
  }
  public get type(): number {
    return this._type;
  }
  public set type(type: number) {
    this._type = type;
  }
}
