export class result{
    private _accessToken : string
    private _account : account

    constructor(
         accessToken : string,
         account : account,
     
    ){
            this._accessToken = accessToken
            this._account = account
    }

     get accessToken() : string{
        return this._accessToken
    }
    get account(): account{
        return this._account
    }

}


 class account{
    constructor(
        private _claims : claims,
        private _username : string
     
    ){

    }

    get claims() : claims{
        return this._claims
    }
    get username() : string{
        return this._username
    }

}

class claims{
    constructor(
        private _aud : undefined,
        private _iss : string,
        private _name: string,
        private _oid : string,
        private _preferred_username : string 

     
    ){

    }

    get aud() : undefined{
        return this._aud
    }

    get iss() : string{
        return this._iss
    }
    get name() : string{
        return this._name
    }
    get oid(): string{
        return this._oid
    }
    get preferred_username() : string {
        return this._preferred_username
    }

}