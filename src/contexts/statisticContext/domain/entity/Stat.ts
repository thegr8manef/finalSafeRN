import {StatObservation} from './statObservation';
import {StatRisk} from './statRisk';
import {StatVisit} from './statVisit';

export class Stat {
  constructor(
    private _statRisk: StatRisk,
    private _statVisit: StatVisit,
    private _statObservation: StatObservation,
    private _statUser?: number,
    private _statRegion?: any,
    private _date_synchro?: number,
  ) {}

  get statRisk(): StatRisk {
    return this._statRisk;
  }

  get statVisit(): StatVisit {
    return this._statVisit;
  }
  get statObservation(): StatObservation {
    return this._statObservation;
  }

  get statRegion(): any {
    return this._statRegion;
  }

  get statUser(): number {
    return this._statUser;
  }
  get dateSynchro(): number {
    return this._date_synchro;
  }
}
