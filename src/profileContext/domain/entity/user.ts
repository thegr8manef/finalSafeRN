export class User {
  constructor(private _function: string, private _region: string) {}

  get function(): string {
    return this._function;
  }

  get region(): string {
    return this._region;
  }
}
