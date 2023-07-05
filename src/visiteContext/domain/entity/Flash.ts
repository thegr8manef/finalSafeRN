import { Photo } from "./Photo";

export class Flash {
     constructor(
  private _commentaire: string,
  private _images: Photo[],
  private _level: number
     ){

     }
     
     get commentaire(): string{
        return this._commentaire
     }

     get images(): Photo[]{
        return this._images
     }
     get level(): number{
        return this._level
     }
}
