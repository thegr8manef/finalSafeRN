export class Profile {
  constructor(
    private _id: string,
    private _name: string,
    private _accessToken: string,
    private _email: string,
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
}
