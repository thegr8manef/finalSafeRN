export class Profile {
  constructor(
    private _id: string,
    private _name: string,
    private _accessToken: string,
    private _email: string,
    private _region: string,
    private _lastUpdate: string,
  ) {}

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get accessToken(): string {
    return this._accessToken;
  }

  get email(): string {
    return this._email;
  }
  get region(): string {
    return this._region;
  }

  get lastUpdate(): string {
    return this._lastUpdate;
  }
}
