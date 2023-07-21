import {Flash} from './Flash';

export class Chantier {
  get pid(): string {
    return this._pid;
  }
  get piid(): string {
    return this._piid;
  }

  get osc(): string {
    return this._osc;
  }

  get ol_name(): string {
    return this._ol_name;
  }
  get org(): string {
    return this._org;
  }

  get ref(): string {
    return this._ref;
  }

  get remaques(): Flash[] {
    return this._remarques;
  }

  get lu(): number {
    return this._lu;
  }

  get st(): number {
    return this._st;
  }

  get cd(): string {
    return this._cd;
  }

  get sr(): number {
    return this._sr;
  }

  get vl(): string {
    return this._vl;
  }

  get py(): string {
    return this._py;
  }

  get co(): string {
    return this._co;
  }

  get cp(): string {
    return this._cp;
  }

  get ac(): boolean {
    return this._ac;
  }

  get type(): number {
    return this._type;
  }

  get ad(): string {
    return this._ad;
  }

  get no(): string {
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
    private _co?: string,
    private _py?: string,
    private _vl?: string,
    private _sr?: number,
    private _cd?: string,
    private _st?: number,
    private _lu?: number,
    private _remarques?: Flash[],
    private _ref?: string,
    private _org?: string,
    private _ol_name?: string,
    private _osc?: string,
    private _pid?: string,
    private _piid?: string,
  ) {}
}
