import { Photo } from './Photo';

export class VisitFlash {

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
