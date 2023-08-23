import { Photo } from './Photo';

export class VisitFlash {

  constructor(
    private _commentaire: string,
    private _images: Photo[],
    private _level: number,
    private _site_id: string,
    private _type: string,
  ) { }

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
}
