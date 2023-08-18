import { FlashPhotoDto } from "@contexts/visiteContext/adapters/secondaires/dto/flash.photo.dto";

export class VisitRemarque {
  constructor(
    private _dt?: string,
    private _ds?: string,
    private _tk?: string,
    private _lvl?: number,
    private _nt?: boolean,
    private _md?: FlashPhotoDto[],
  ) {
  }
  public get md(): FlashPhotoDto[] | undefined {
    return this._md;
  }
  public set md(value: FlashPhotoDto[] | undefined) {
    this._md = value;
  }
  public get nt(): boolean | undefined {
    return this._nt;
  }
  public set nt(value: boolean | undefined) {
    this._nt = value;
  }
  public get lvl(): number | undefined {
    return this._lvl;
  }
  public set lvl(value: number | undefined) {
    this._lvl = value;
  }
  public get tk(): string | undefined {
    return this._tk;
  }
  public set tk(value: string | undefined) {
    this._tk = value;
  }
  public get ds(): string | undefined {
    return this._ds;
  }
  public set ds(value: string | undefined) {
    this._ds = value;
  }
  public get dt(): string | undefined {
    return this._dt;
  }
  public set dt(value: string | undefined) {
    this._dt = value;
  }


}
