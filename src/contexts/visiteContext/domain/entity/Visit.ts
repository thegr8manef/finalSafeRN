import { Chantier } from "@common/adapters/secondaries/db/entity/Chantier";
import { RemarqueDto } from "@contexts/visiteContext/adapters/secondaires/dto/remarque.dto";
import { VisitRemarque } from "./VisitRemarque";

export class Visit {

  constructor(
    private _tp?: number,
    private _tk?: string,
    private _cdc?: string,
    private _dt?: string,
    private _rq?: VisitRemarque[],
    private _chantier?: Chantier,
  ) {
  }
  public get tp(): number | undefined {
    return this._tp;
  }
  public set tp(value: number | undefined) {
    this._tp = value;
  }
  public get dt(): string | undefined {
    return this._dt;
  }
  public set dt(value: string | undefined) {
    this._dt = value;
  }
  public get tk(): string | undefined {
    return this._tk;
  }
  public set tk(value: string | undefined) {
    this._tk = value;
  }
  public get rq(): RemarqueDto[] | undefined {
    return this._rq;
  }
  public set rq(value: RemarqueDto[] | undefined) {
    this._rq = value;
  }
  public get cdc(): string | undefined {
    return this._cdc;
  }
  public set cdc(value: string | undefined) {
    this._cdc = value;
  }
  public getchantier?(): Chantier | undefined {
    return this._chantier;
  }
  public setchantier?(chantier?: Chantier | undefined) {
    this._chantier = chantier;
  }
}
