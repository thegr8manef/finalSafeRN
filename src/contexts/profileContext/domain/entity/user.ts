export class User {
  constructor(
    private _function: string,
    private _region: string,
    private _lastUpdateDate: string,
  ) {}

  get function(): string {
    return this._function;
  }

  get region(): string {
    return this._region;
  }
  get lastUpdateDate(): string {
    return this._lastUpdateDate;
  }
}
