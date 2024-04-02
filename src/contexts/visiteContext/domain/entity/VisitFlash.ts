import { FlashPhotoDto } from '@contexts/visiteContext/adapters/secondaires/dto/flash.photo.dto';
import { Photo } from './Photo';

export class VisitFlash {
  public get site_name(): string {
    return this._site_name;
  }
  public set site_name(value: string) {
    this._site_name = value;
  }
  public get date(): string {
    return this._date;
  }
  public set date(value: string) {
    this._date = value;
  }
  constructor(
    private _id : string,
    private _commentaire: string,
    private _images?: Photo[],
    private _level?: number,
    private _site_id?: string,
    private _site_name?: string,
    private _type?: number,
    private _date?: string,
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
  get images(): Photo[] | undefined {
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
