import {Flash} from './Flash';

export class Chantier {
  //pid tjrs 223
  get pid(): string {
    return this._pid;
  }
  //piid tjrs 219
  get piid(): string {
    return this._piid;
  }
  //osc tjrs true
  get osc(): string {
    return this._osc;
  }

  get region_name(): string {
    return this._ol_name;
  }

  get refference(): string {
    return this._ref;
  }

  get remaques(): Flash[] {
    return this._remarques;
  }

  get last_update(): number {
    return this._lu;
  }

  get st(): number {
    return this._st;
  }

  get ville(): string {
    return this._vl;
  }

  get pays(): string {
    return this._py;
  }

  get code_postal(): string {
    return this._cp;
  }

  get accepted(): boolean {
    return this._ac;
  }

  get type(): number {
    return this._type;
  }

  get addresse(): string {
    return this._ad;
  }

  get nom_chantier(): string {
    return this._no;
  }

  get id(): string {
    return this._id;
  }
  constructor(
    private _id?: string,
    private _no?: string,
    private _ad?: string,
    private _type?: number,
    private _ac?: boolean,
    private _cp?: string,
    private _py?: string,
    private _vl?: string,
    private _st?: number,
    private _lu?: number,
    private _remarques?: Flash[],
    private _ref?: string,
    private _ol_name?: string,
    private _osc?: string,
    private _pid?: string,
    private _piid?: string,
  ) {}
}
