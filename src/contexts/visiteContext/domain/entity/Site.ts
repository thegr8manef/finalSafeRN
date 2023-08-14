import {Flash} from './Flash';

export class Site {
  constructor(
    private _id: string,
    private _name: string,
    private _address: string,
    private _type: number,
    private _accepted: boolean,
    private _codePostal: string,
    private _pays: string,
    private _ville: string,
    private _st: number,
    private _lastUpdateDate: number,
    private _reference: string,
    private _regionName: string,
    private _osc: string,

    private _pid: string,
    private _piid: string,

    private _sr: number,
    private _org: string,
  ) {}
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
    return this._regionName;
  }

  get reference(): string {
    return this._reference;
  }

  get last_update(): number {
    return this._lastUpdateDate;
  }

  get st(): number {
    return this._st;
  }

  get sr(): number {
    return this._sr;
  }
  get org(): string {
    return this._org;
  }

  get ville(): string {
    return this._ville;
  }

  get pays(): string {
    return this._pays;
  }

  get code_postal(): string {
    return this._codePostal;
  }

  get accepted(): boolean {
    return this._accepted;
  }

  get type(): number {
    return this._type;
  }

  get address(): string {
    return this._address;
  }

  get name(): string {
    return this._name;
  }

  get id(): string {
    return this._id;
  }
}
